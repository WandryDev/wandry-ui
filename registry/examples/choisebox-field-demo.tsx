"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import ChoiseboxField from "@/registry/wandry-ui/choisebox-field";

export type ChoiseboxFieldDemoProps = {};

const ChoiseboxFieldDemo: React.FC<ChoiseboxFieldDemoProps> = (props) => {
  return (
    <Form action="#" className="w-full">
      <ChoiseboxField
        name="compute-environment"
        label="Compute Environment"
        description="Select the compute environment for your cluster."
        options={[
          {
            label: "Environment A",
            description: "This is the description for Environment A.",
            value: "env-a",
          },
          {
            label: "Environment B",
            description: "This is the description for Environment B.",
            value: "env-b",
          },
          {
            label: "Environment C",
            description: "This is the description for Environment C.",
            value: "env-c",
          },
        ]}
        defaultValue="env-b"
      />
    </Form>
  );
};

export default ChoiseboxFieldDemo;
