"use client";
import * as React from "react";
import { useField } from "@wandry/inertia-form";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export type SwitchFieldProps = {
  name: string;
  label?: string;
  description?: string;
  errorName?: string;
  orientation?: "vertical" | "horizontal" | "responsive";
};

const SwitchField: React.FC<SwitchFieldProps> = ({
  name,
  label,
  description,
  errorName,
  orientation = "horizontal",
}) => {
  const field = useField(name, { defaultValue: false, errorName });

  return (
    <Field orientation={orientation}>
      <FieldContent>
        <FieldLabel htmlFor={name}>{label}</FieldLabel>
        <FieldDescription>{description}</FieldDescription>
      </FieldContent>
      <Switch
        id={name}
        checked={field.value}
        onCheckedChange={field.onChange}
      />
    </Field>
  );
};

export default SwitchField;
