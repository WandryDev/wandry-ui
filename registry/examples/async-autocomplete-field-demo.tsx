"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import { loadFrameworksOptions } from "@/app/mocks";
import AsyncAutocompleteField from "@/registry/wandry-ui/async-autocomplete-field";

export type AsyncAutocompleteFieldDemoProps = {};

const AsyncAutocompleteFieldDemo: React.FC<AsyncAutocompleteFieldDemoProps> = (
  props
) => {
  return (
    <Form action="#">
      <AsyncAutocompleteField
        label="Frameworks"
        placeholder="Select a framework"
        description="Start typing to search for a framework"
        name="frameworks"
        loadOptions={loadFrameworksOptions}
      />
    </Form>
  );
};

export default AsyncAutocompleteFieldDemo;
