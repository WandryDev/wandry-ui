"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import SliderField from "@/registry/wandry-ui/slider-field";

export type SliderFieldDemoProps = {};

const SliderFieldDemo: React.FC<SliderFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <SliderField
        name="volume"
        label="Volume"
        description="Adjust the volume level"
        min={0}
        max={100}
        step={1}
      />
    </Form>
  );
};

export default SliderFieldDemo;
