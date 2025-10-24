"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import CheckboxField from "@/registry/wandry-ui/checkbox-field";

export type CheckboxFieldDemoProps = {};

const CheckboxFieldDemo: React.FC<CheckboxFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <CheckboxField
        name="is_checked"
        label="I agree to the terms and conditions"
      />
    </Form>
  );
};

export default CheckboxFieldDemo;
