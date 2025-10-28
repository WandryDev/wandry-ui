"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import SubmitButton from "@/registry/wandry-ui/submit-button";

export type SubmitButtonDemoProps = {};

const SubmitButtonDemo: React.FC<SubmitButtonDemoProps> = (props) => {
  return (
    <Form action="#" className="space-x-2">
      <SubmitButton>Submit</SubmitButton>
      <SubmitButton variant="outline">Submit</SubmitButton>
      <SubmitButton variant="destructive">Submit</SubmitButton>
      <SubmitButton variant="ghost">Submit</SubmitButton>
      <SubmitButton variant="link">Submit</SubmitButton>
    </Form>
  );
};

export default SubmitButtonDemo;
