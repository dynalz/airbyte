import { useFormikContext, setIn } from "formik";
import React, { useCallback, useMemo } from "react";

import { DropDown } from "components";
import { IDataItem } from "components/base/DropDown/components/Option";
import GroupControls from "components/GroupControls";

import { FormBlock, FormConditionItem } from "core/form/types";
import { isDefined } from "utils/common";

import { useServiceForm } from "../../serviceFormContext";
import { ServiceFormValues } from "../../types";
import { PropertyLabel } from "../Property/PropertyLabel";
import styles from "./ConditionSection.module.scss";
import { FormSection } from "./FormSection";

interface ConditionSectionProps {
  formField: FormConditionItem;
  path?: string;
  disabled?: boolean;
}

/**
 * ConditionSection is responsible for handling oneOf sections of form
 */
export const ConditionSection: React.FC<ConditionSectionProps> = ({ formField, path, disabled }) => {
  const { widgetsInfo, setUiWidgetsInfo } = useServiceForm();
  const { values, setValues } = useFormikContext<ServiceFormValues>();

  const currentlySelectedCondition = widgetsInfo[formField.path]?.selectedItem;

  const onOptionChange = useCallback(
    (selectedItem: IDataItem) => {
      const newSelectedPath = formField.conditions[selectedItem.value];

      const newValues =
        newSelectedPath._type === "formGroup"
          ? newSelectedPath.properties?.reduce(
              (acc: ServiceFormValues, property: FormBlock) =>
                property._type === "formItem" && isDefined(property.const)
                  ? setIn(acc, property.path, property.const)
                  : acc,
              values
            )
          : values;

      setUiWidgetsInfo(formField.path, {
        selectedItem: selectedItem.value,
      });
      setValues(newValues);
    },
    [values, formField.conditions, setValues, setUiWidgetsInfo, formField.path]
  );

  const options = useMemo(
    () =>
      Object.keys(formField.conditions).map((dataItem) => ({
        label: dataItem,
        value: dataItem,
      })),
    [formField.conditions]
  );

  return (
    <GroupControls
      key={`form-field-group-${formField.fieldKey}`}
      fullWidthTitle
      title={
        <div className={styles.sectionTitle}>
          <PropertyLabel
            className={styles.groupLabel}
            property={formField}
            label={`${formField.title || formField.fieldKey}`}
            optional={false}
          />
          <DropDown
            className={styles.sectionTitleDropdown}
            options={options}
            onChange={onOptionChange}
            value={currentlySelectedCondition}
            name={formField.path}
            isDisabled={disabled}
          />
        </div>
      }
    >
      <div className={styles.conditionControls}>
        <FormSection
          blocks={formField.conditions[currentlySelectedCondition]}
          path={path}
          disabled={disabled}
          skipAppend
        />
      </div>
    </GroupControls>
  );
};
