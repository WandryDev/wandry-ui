"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import { SelectField } from "../wandry-ui";

export type SelectFieldDemoProps = {};

const SelectFieldDemo: React.FC<SelectFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <SelectField
        name="last_name"
        label="Last Name"
        placeholder="Select your last name"
        options={{
          "Last Names A-M": [
            { value: "anderson", label: "Anderson" },
            { value: "brown", label: "Brown" },
            { value: "martin", label: "Martin" },
          ],
          "Last Names N-Z": [
            { value: "nguyen", label: "Nguyen" },
            { value: "roberts", label: "Roberts" },
            { value: "wilson", label: "Wilson" },
          ],
        }}
      />
    </Form>
  );
};

export default SelectFieldDemo;
