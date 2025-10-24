"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import DatepickerField from "@/registry/wandry-ui/datepicker-field";

export type DatepickerFieldDemoProps = {};

const DatepickerFieldDemo: React.FC<DatepickerFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <DatepickerField
        name="date"
        label="Date"
        placeholder="Select a date"
        description="Open calendar and select"
      />
    </Form>
  );
};

export default DatepickerFieldDemo;
