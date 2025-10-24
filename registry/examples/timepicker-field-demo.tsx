"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import TimepickerField from "@/registry/wandry-ui/timepicker-field";

export type TimepickerFieldDemoProps = {};

const TimepickerFieldDemo: React.FC<TimepickerFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <TimepickerField
        name="appointment_time"
        label="Appointment Time"
        description="Please select a time for your appointment."
        placeholder="Select time"
      />
    </Form>
  );
};

export default TimepickerFieldDemo;
