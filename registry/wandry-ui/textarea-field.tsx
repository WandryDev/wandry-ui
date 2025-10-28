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
  errorName?: string;
  description?: string;
  placeholder?: string;
  classes?: TextareaFieldClasses;
};

type TextareaFieldClasses = {
  field?: string;
  label?: string;
  textarea?: string;
  description?: string;
  error?: string;
};

const TextareaField: React.FC<
  React.ComponentProps<"textarea"> & TextareaFieldProps
> = ({
  name,
  label,
  description,
  placeholder,
  classes,
  errorName,
  ...textareaProps
}) => {
  const field = useField(name, { defaultValue: "", errorName });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    field.onChange(value);
  };

  return (
    <Field className={classes?.field}>
      <FieldLabel className={classes?.label} htmlFor={name}>
        {label}
      </FieldLabel>
      <Textarea
        {...textareaProps}
        id={name}
        placeholder={placeholder}
        value={field.value}
        onChange={handleChange}
        className={classes?.textarea}
      />
      <FieldDescription className={classes?.description}>
        {description}
      </FieldDescription>
      <FieldError className={classes?.error}>{field.error}</FieldError>
    </Field>
  );
};

export default TextareaField;
