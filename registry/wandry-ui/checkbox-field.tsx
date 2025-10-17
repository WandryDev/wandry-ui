"use client";

import * as React from "react";

import { useField } from "@wandry/inertia-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";

export type CheckboxFieldProps = {
  name: string;
  label?: string;
  description?: string;
  orientation?: "vertical" | "horizontal" | "responsive";
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  description,
  orientation = "horizontal",
}) => {
  const field = useField(name, { defaultValue: false });

  return (
    <Field orientation={orientation}>
      <Checkbox
        id={name}
        name={name}
        checked={field.value}
        onCheckedChange={field.onChange}
      />
      <FieldLabel htmlFor={name} className="font-normal" defaultChecked>
        {label}
      </FieldLabel>
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

export default CheckboxField;
