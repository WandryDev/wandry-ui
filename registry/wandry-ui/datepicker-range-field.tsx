"use client";
import * as React from "react";
import { DateRange } from "react-day-picker";
import { CalendarIcon } from "lucide-react";
import { useWatch, useFormContext, useField } from "@wandry/inertia-form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import { cn } from "@/lib/utils";

export type DatepickerRangeFieldProps = {
  nameFrom: string;
  nameTo: string;
  label?: string;
  placeholder?: string;
  description?: string;
};

const DatepickerRangeField: React.FC<DatepickerRangeFieldProps> = ({
  nameFrom,
  nameTo,
  label,
  placeholder = "Pick a date range",
  description,
}) => {
  const { setValue } = useFormContext();

  const from = useWatch(nameFrom, { defaultValue: new Date() });
  const to = useWatch(nameTo, { defaultValue: new Date() });

  const { error: errorFrom } = useField(nameFrom);
  const { error: errorTo } = useField(nameTo);

  const onChange = (range: DateRange) => {
    setValue(nameFrom, range.from);
    setValue(nameTo, range.to);
  };

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn("w-[280px] justify-start text-left font-normal")}
            variant="outline"
            suppressHydrationWarning
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {from ? (
              to ? (
                <>
                  {from.toLocaleDateString()} - {to.toLocaleDateString()}
                </>
              ) : (
                from.toLocaleDateString()
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            required
            mode="range"
            numberOfMonths={2}
            onSelect={onChange}
            selected={{ from, to }}
          />
        </PopoverContent>
      </Popover>
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{errorFrom}</FieldError>
      <FieldError>{errorTo}</FieldError>
    </Field>
  );
};

export default DatepickerRangeField;
