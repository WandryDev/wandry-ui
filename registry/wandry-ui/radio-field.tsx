"use client";

import * as React from "react";

import { useField } from "@wandry/inertia-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Field, FieldLabel } from "@/components/ui/field";

export type Option = {
  value: string;
  label: string;
};

export type RadioFieldProps = {
  name: string;
  options: Option[];
  orientation?: "vertical" | "horizontal" | "responsive";
};

const RadioField: React.FC<RadioFieldProps> = ({
  name,
  options,
  orientation = "horizontal",
}) => {
  const field = useField(name);

  return (
    <RadioGroup
      defaultValue="monthly"
      value={field.value}
      onValueChange={field.onChange}
    >
      {options.map((option) => (
        <Field orientation={orientation} key={option.value}>
          <RadioGroupItem value={option.value} id={option.value} />
          <FieldLabel htmlFor={option.value} className="font-normal">
            {option.label}
          </FieldLabel>
        </Field>
      ))}
    </RadioGroup>
  );
};

export default RadioField;
