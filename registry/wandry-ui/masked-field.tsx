"use client";
import * as React from "react";
import { useField } from "@wandry/inertia-form";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { MaskInput, MaskInputProps } from "@/components/ui/mask-input";

export type MaskedFieldProps = {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
} & Omit<MaskInputProps, "name" | "label" | "description" | "placeholder">;

const MaskedField: React.FC<MaskedFieldProps> = ({
  name,
  label,
  description,
  placeholder,
  ...props
}) => {
  const field = useField(name);

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <MaskInput
        mask={props.mask}
        placeholder={placeholder}
        value={field.value}
        onValueChange={field.onChange}
      />
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

export default MaskedField;
