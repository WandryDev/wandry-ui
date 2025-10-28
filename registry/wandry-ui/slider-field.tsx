"use client";
import * as React from "react";
import { useField } from "@wandry/inertia-form";

import { Root as SliderPrimitiveRoot } from "@radix-ui/react-slider";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";

export type SliderFieldProps = Omit<
  React.ComponentProps<typeof SliderPrimitiveRoot>,
  "onValueChange" | "value"
> & {
  name: string;
  label?: string;
  description?: string;
  errorName?: string;
  defaultValue?: number[];
};

const SliderField: React.FC<SliderFieldProps> = ({
  name,
  label,
  description,
  errorName,
  defaultValue = [0],
  ...props
}) => {
  const field = useField(name, { defaultValue, errorName });

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      <Slider
        {...props}
        aria-label={label}
        onValueChange={field.onChange}
        value={field.value}
      />
      <FieldDescription>{description}</FieldDescription>
    </Field>
  );
};

export default SliderField;
