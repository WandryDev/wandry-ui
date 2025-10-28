"use client";

import * as React from "react";

import { useField } from "@wandry/inertia-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";

export type Option = {
  value: string;
  label: string;
};

type RadioFieldClasses = {
  field?: string;
  label?: string;
  item?: string;
  description?: string;
  error?: string;
};

export type RadioFieldProps = {
  name: string;
  label?: string;
  description?: string;
  options: Option[];
  orientation?: "vertical" | "horizontal" | "responsive";
  classes?: RadioFieldClasses;
};

const RadioField: React.FC<RadioFieldProps> = ({
  name,
  options,
  classes,
  label,
  description,
  orientation = "horizontal",
}) => {
  const field = useField(name);

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <FieldDescription>{description}</FieldDescription>
      <RadioGroup
        defaultValue="monthly"
        value={field.value}
        onValueChange={field.onChange}
      >
        {options.map((option) => (
          <Field
            orientation={orientation}
            key={option.value}
            className={classes?.field}
          >
            <RadioGroupItem
              value={option.value}
              id={option.value}
              className={classes?.item}
            />
            <FieldLabel
              htmlFor={option.value}
              className={cn("font-normal", classes?.label)}
            >
              {option.label}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

export default RadioField;
