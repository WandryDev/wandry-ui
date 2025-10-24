"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import RadioField from "@/registry/wandry-ui/radio-field";

export type RadioFieldDemoProps = {};

const RadioFieldDemo: React.FC<RadioFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <RadioField
        name="plan"
        options={[
          { value: "monthly", label: "Monthly" },
          { value: "yearly", label: "Yearly" },
        ]}
      />
    </Form>
  );
};

export default RadioFieldDemo;
