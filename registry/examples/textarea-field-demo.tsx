"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import { TextareaField } from "../wandry-ui";

export type TextareaFieldDemoProps = {};

const TextareaFieldDemo: React.FC<TextareaFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <TextareaField
        name="description"
        label="Description"
        placeholder="Enter a brief description"
        description="This will be displayed on your profile"
      />
    </Form>
  );
};

export default TextareaFieldDemo;
