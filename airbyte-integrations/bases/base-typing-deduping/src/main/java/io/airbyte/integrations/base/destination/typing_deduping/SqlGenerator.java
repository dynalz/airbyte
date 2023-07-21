/*
 * Copyright (c) 2023 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.base.destination.typing_deduping;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface SqlGenerator<DialectTableDefinition> {

  Set<String> FINAL_TABLE_AIRBYTE_COLUMNS = Set.of("_airbyte_raw_id", "_airbyte_extracted_at", "_airbyte_meta");
  String SOFT_RESET_SUFFIX = "_ab_soft_reset";

  StreamId buildStreamId(String namespace, String name, String rawNamespaceOverride);

  ColumnId buildColumnId(String name);

  /**
   * Generate a SQL statement to create a fresh table to match the given stream.
   * <p>
   * The generated SQL may throw an exception if the table already exists. Callers should use
   * {@link #existingSchemaMatchesStreamConfig(StreamConfig, java.lang.Object)} if the table is known
   * to exist.
   *
   * @param suffix A suffix to add to the stream name. Useful for full refresh overwrite syncs, where
   *        we write the entire sync to a temp table.
   */
  String createTable(final StreamConfig stream, final String suffix);

  /**
   * Check the final table's schema and compare it to what the stream config would generate.
   *
   * @param stream the stream/stable in question
   * @param existingTable the existing table mapped to the stream
   * @return whether the existing table matches the expected schema
   * @throws TableNotMigratedException if the table does not contain all
   *         {@link SqlGenerator#FINAL_TABLE_AIRBYTE_COLUMNS}
   */
  boolean existingSchemaMatchesStreamConfig(final StreamConfig stream, final DialectTableDefinition existingTable) throws TableNotMigratedException;

  // TODO: Make softReset a single SQL statement rather than a list
  /**
   * SQL Statements which will rebuild the final table using the raw table data
   *
   * @param stream the stream to rebuild
   * @return an ordered sequence of SQL statements to execute to rebuild the final table.
   */
  List<String> softReset(final StreamConfig stream);

  /**
   * Generate a SQL statement to copy new data from the raw table into the final table.
   * <p>
   * Supports both incremental and one-shot loading. (maybe.)
   * <p>
   * Responsible for:
   * <ul>
   * <li>Pulling new raw records from a table (i.e. records with null _airbyte_loaded_at)</li>
   * <li>Extracting the JSON fields and casting to the appropriate types</li>
   * <li>Handling errors in those casts</li>
   * <li>Merging those typed records into an existing table</li>
   * <li>Updating the raw records with SET _airbyte_loaded_at = now()</li>
   * </ul>
   * <p>
   * Implementing classes are recommended to break this into smaller methods, which can be tested in
   * isolation. However, this interface only requires a single mega-method.
   *
   * @param finalSuffix the suffix of the final table to write to. If empty string, writes to the
   *        final table directly. Useful for full refresh overwrite syncs, where we write the entire
   *        sync to a temp table and then swap it into the final table at the end.
   */
  String updateTable(String finalSuffix, final StreamConfig stream);

  /**
   * Drop the previous final table, and rename the new final table to match the old final table.
   */
  Optional<String> overwriteFinalTable(String finalSuffix, StreamConfig stream);

}
