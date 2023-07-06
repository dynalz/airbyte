#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#


import setuptools

MAIN_REQUIREMENTS = [
    "airbyte-protocol-models",
    "dagger-io==0.6.0",
    "PyYAML~=5.4",
    "icdiff~=1.9",
    "inflection~=0.5",
    "pdbpp~=0.10",
    "pydantic",
    "pytest~=6.2",
    "pytest-sugar~=0.9",
    "pytest-timeout~=1.4",
    "pprintpp~=0.4",
    "dpath~=2.0.1",
    "jsonschema",
    "jsonref==0.2",
    "deepdiff~=5.8.0",
    "requests-mock~=1.9.3",
    "pytest-mock~=3.6.1",
    "pendulum",
    "pytest-cov~=3.0.0",
    "hypothesis",
    "hypothesis-jsonschema",
    # Pinning requests and urllib3 to avoid an issue with dockerpy and requests 2.
    # Related issue: https://github.com/docker/docker-py/issues/3113
    "urllib3<2.0",
    "requests<2.29.0",
    "anyio",
    "pytest-custom_exit_code",
]

setuptools.setup(
    name="connector-acceptance-test",
    description="Contains acceptance tests for connectors.",
    author="Airbyte",
    author_email="contact@airbyte.io",
    url="https://github.com/airbytehq/airbyte",
    packages=setuptools.find_packages(),
    install_requires=MAIN_REQUIREMENTS,
)
