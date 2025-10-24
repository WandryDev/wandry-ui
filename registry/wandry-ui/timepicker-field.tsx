"use client";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useField } from "@wandry/inertia-form";
import * as React from "react";

export type TimepickerFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
};

const TimepickerField: React.FC<TimepickerFieldProps> = ({
  name,
  label,
  description,
  placeholder,
}) => {
  const field = useField(name, { defaultValue: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(event.target.value);
  };

  return (
    <Field>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Input
        type="time"
        id={name}
        step="1"
        placeholder={placeholder}
        value={field.value}
        onChange={handleChange}
        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
      />
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

export default TimepickerField;
