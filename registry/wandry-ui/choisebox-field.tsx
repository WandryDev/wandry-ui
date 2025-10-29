"use client";

import * as React from "react";
import { useField } from "@wandry/inertia-form";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Option = {
  label: string;
  description: string;
  value: string;
};

type ChoiseboxClasses = {
  field?: string;
  label?: string;
  description?: string;
  error?: string;
  item?: string;
};

export type ChoiseboxFieldProps = {
  name: string;
  options: Option[];
  label?: string;
  description?: string;
  defaultValue?: string;
  errorName?: string;
  classes?: ChoiseboxClasses;
  orientation?: "horizontal" | "vertical";
};

const ChoiseboxField: React.FC<ChoiseboxFieldProps> = ({
  name,
  label,
  description,
  options,
  defaultValue,
  errorName,
  classes,
  orientation = "vertical",
}) => {
  const field = useField(name, { defaultValue, errorName });

  return (
    <Field className={classes?.field} orientation="responsive">
      <FieldLabel className={classes?.label} htmlFor="compute-environment-p8w">
        {label}
      </FieldLabel>
      <FieldDescription className={classes?.description}>
        {description}
      </FieldDescription>
      <Field orientation={orientation}>
        {options.map((option) => (
          <RadioGroup
            key={option.value}
            value={field.value}
            onValueChange={field.onChange}
          >
            <FieldLabel htmlFor={option.value} key={option.value}>
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>{option.label}</FieldTitle>
                  <FieldDescription>{option.description}</FieldDescription>
                </FieldContent>
                <RadioGroupItem value={option.value} id={option.value} />
              </Field>
            </FieldLabel>
          </RadioGroup>
        ))}
      </Field>
      <FieldError className={classes?.error}>{field.error}</FieldError>
    </Field>
  );
};

export default ChoiseboxField;
