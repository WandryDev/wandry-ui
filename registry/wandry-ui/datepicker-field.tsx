"use client";

import * as React from "react";
import { useField } from "@wandry/inertia-form";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DayPicker } from "react-day-picker";

export type DatepickerFieldProps = React.ComponentProps<typeof DayPicker> & {
  name: string;
  placeholder?: string;
  description?: string;
  label?: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
};

const DatepickerField: React.FC<DatepickerFieldProps> = ({
  name,
  label,
  placeholder,
  description,
}) => {
  const [open, setOpen] = React.useState(false);
  const field = useField(name, { defaultValue: new Date() });

  return (
    <Field>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            suppressHydrationWarning
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {field.value ? field.value.toLocaleDateString() : placeholder}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            captionLayout="dropdown"
            onSelect={(date) => {
              field.onChange(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

export default DatepickerField;
