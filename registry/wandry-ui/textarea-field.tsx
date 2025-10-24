"use client";
import * as React from "react";
import { useField } from "@wandry/inertia-form";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export type TextareaFieldProps = {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
};

const TextareaField: React.FC<
  React.ComponentProps<"textarea"> & TextareaFieldProps
> = ({ name, label, description, placeholder, ...textareaProps }) => {
  const field = useField(name, { defaultValue: "" });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    field.onChange(value);
  };

  return (
    <Field>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Textarea
        {...textareaProps}
        id={name}
        placeholder={placeholder}
        value={field.value}
        onChange={handleChange}
      />
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

export default TextareaField;
