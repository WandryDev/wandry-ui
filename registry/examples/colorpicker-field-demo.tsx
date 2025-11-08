"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import ColorPickerField from "@/registry/wandry-ui/colorpicker-field";

export type ColorPickerFieldDemoProps = {};

const ColorPickerFieldDemo: React.FC<ColorPickerFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <ColorPickerField
        label="Badge color"
        name="bg"
        description="Select a color for the badge"
      />
    </Form>
  );
};

export default ColorPickerFieldDemo;
