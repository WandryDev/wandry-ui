"use client";

import * as React from "react";
import { useField } from "@wandry/inertia-form";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Option = {
  label: string;
  description: string;
  value: string;
};

export type ChoiseboxFieldProps = {
  name: string;
  options: Option[];
  label?: string;
  description?: string;
  defaultValue?: string;
};

const ChoiseboxField: React.FC<ChoiseboxFieldProps> = ({
  name,
  label,
  description,
  options,
  defaultValue,
}) => {
  const field = useField(name, { defaultValue });

  return (
    <FieldGroup className="w-full max-w-md">
      <FieldSet>
        <FieldLabel htmlFor="compute-environment-p8w">{label}</FieldLabel>
        <FieldDescription>{description}</FieldDescription>
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
      </FieldSet>
    </FieldGroup>
  );
};

export default ChoiseboxField;
