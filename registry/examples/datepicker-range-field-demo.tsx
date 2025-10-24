"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import DatepickerRangeField from "@/registry/wandry-ui/datepicker-range-field";

export type DatepickerRangeFieldDemoProps = {};

const DatepickerRangeFieldDemo: React.FC<DatepickerRangeFieldDemoProps> = (
  props
) => {
  return (
    <Form action="#">
      <DatepickerRangeField
        nameFrom="startDate"
        nameTo="endDate"
        label="Select Date Range"
        description="Please select a start and end date."
      />
    </Form>
  );
};

export default DatepickerRangeFieldDemo;
