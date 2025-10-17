"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { useField } from "@wandry/inertia-form";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

interface Options {
  value: string;
  label: string;
}
interface GroupedOptions {
  [key: string]: { value: string; label: string }[];
}

export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>;
export type SelectGroupProps = React.ComponentProps<
  typeof SelectPrimitive.Group
>;
export type SelectValueProps = React.ComponentProps<
  typeof SelectPrimitive.Value
>;
export type SelectContentProps = React.ComponentProps<
  typeof SelectPrimitive.Content
>;
export type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item>;

export type SelectTriggerProps = React.ComponentProps<
  typeof SelectPrimitive.Trigger
> & {
  size?: "sm" | "default";
};

export type SelectFieldProps = {
  name: string;
  placeholder?: string;
  label?: string;
  description?: string;
  options: Options[] | GroupedOptions;
  selectProps?: SelectProps;
  contentProps?: SelectContentProps;
  triggerProps?: SelectTriggerProps;
  itemProps?: Omit<SelectItemProps, "value">;
};

const isGroupedOptions = (
  options: Options[] | GroupedOptions
): options is GroupedOptions => {
  return !Array.isArray(options);
};

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  options,
  label,
  description,
  placeholder,
  selectProps,
  contentProps,
  triggerProps,
  itemProps,
}) => {
  const field = useField(name);

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Select
        name={name}
        value={field.value}
        onValueChange={field.onChange}
        {...selectProps}
      >
        <SelectTrigger {...triggerProps}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent {...contentProps}>
          {isGroupedOptions(options) ? (
            <SelectFieldGroupedContent options={options} {...itemProps} />
          ) : (
            <SelectFieldContent options={options} {...itemProps} />
          )}
        </SelectContent>
      </Select>
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

const SelectFieldContent: React.FC<
  { options: Options[] } & Omit<SelectItemProps, "value">
> = ({ options, ...itemProps }) => {
  return (
    <>
      {options.map((option) => (
        <SelectItem {...itemProps} key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </>
  );
};

const SelectFieldGroupedContent: React.FC<
  { options: GroupedOptions } & Omit<SelectItemProps, "value">
> = ({ options, ...itemProps }) => {
  return (
    <>
      {Object.entries(options).map(([group, items]) => (
        <SelectGroup key={group}>
          <SelectLabel>{group}</SelectLabel>
          {items.map((item) => (
            <SelectItem {...itemProps} key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      ))}
    </>
  );
};

export default SelectField;
