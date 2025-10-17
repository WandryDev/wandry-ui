"use client";

import { useField } from "@wandry/inertia-form";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

type InputProps = Omit<React.ComponentProps<"input">, "name">;

type TextFieldProps = InputProps & {
  name: string;
  description?: string;
  label?: string;
  addonLeft?: React.ReactNode;
  addonRight?: React.ReactNode;
};

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  description,
  addonLeft,
  addonRight,
  defaultValue = "",
  ...inputProps
}) => {
  const field = useField(name, { defaultValue });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    field.onChange(value);
  };

  return (
    <Field>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id={name}
          name={name}
          value={field.value}
          onChange={onChange}
          {...inputProps}
        />
        {addonLeft && <InputGroupAddon>{addonLeft}</InputGroupAddon>}
        {addonRight && (
          <InputGroupAddon align="inline-end">{addonRight}</InputGroupAddon>
        )}
      </InputGroup>
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

export default TextField;
