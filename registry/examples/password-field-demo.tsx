"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import PasswordField from "@/registry/wandry-ui/password-field";

export type PasswordFieldDemoProps = {};

const PasswordFieldDemo: React.FC<PasswordFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <PasswordField
        name="password"
        label="Password"
        placeholder="Enter your password"
        description="This will be used to log in to your account"
      />
    </Form>
  );
};

export default PasswordFieldDemo;
