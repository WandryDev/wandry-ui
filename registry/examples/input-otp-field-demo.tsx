"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import { onResend } from "@/app/mocks";
import InputOtpField from "@/registry/wandry-ui/input-otp-field";

export type InputOtpFieldDemoProps = {};

const InputOtpFieldDemo: React.FC<InputOtpFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <InputOtpField
        name="code_r"
        label="OTP Code (with Resend)"
        description="Enter the OTP sent to your email"
        onResend={onResend}
      />
    </Form>
  );
};

export default InputOtpFieldDemo;
