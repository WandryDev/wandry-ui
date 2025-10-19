"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import { SwitchField } from "../wandry-ui";

export type SwitchFieldDemoProps = {};

const SwitchFieldDemo: React.FC<SwitchFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <SwitchField
        name="2fa"
        label="Multi-factor authentication"
        description="Enable multi-factor authentication. If you do not have a two-factor device, you can use a one-time code sent to your email."
      />
    </Form>
  );
};

export default SwitchFieldDemo;
