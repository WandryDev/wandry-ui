"use client";
import * as React from "react";
import { Pipette } from "lucide-react";
import { useField } from "@wandry/inertia-form";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import type {
  ColorAreaProps,
  ColorFormat,
  ColorPickerProps as ColorPickerPrimitiveProps,
  ColorSliderProps,
  ColorSwatchProps,
  ColorThumbProps,
  SliderOutputProps,
  SliderTrackProps,
} from "react-aria-components";
import {
  ColorThumb as ColorThumbPrimitive,
  ColorArea as ColorAreaPrimitive,
  ColorSlider as ColorSliderPrimitive,
  ColorPicker as ColorPickerPrimitive,
  ColorSwatch as ColorSwatchPrimitive,
  SliderOutput as SliderOutputPrimitive,
  SliderTrack as SliderTrackPrimitive,
  ColorPickerStateContext,
  parseColor,
} from "react-aria-components";
import { cn } from "@/lib/utils";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type ColorFieldProps = {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  format?: ColorFormat | "css";
  defaultValue?: string;
};

interface ColorPickerProps extends ColorPickerPrimitiveProps {
  className?: string;
}

declare global {
  interface Window {
    EyeDropper?: new () => { open: () => Promise<{ sRGBHex: string }> };
  }
}

const ColorPickerField: React.FC<ColorFieldProps> = ({
  name,
  label,
  description,
  defaultValue = "#FFFFFF",
  format = "hex",
}) => {
  const field = useField(name, { defaultValue });

  const onColorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    field.onChange(value);
  };

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput value={field.value} onChange={onColorInputChange} />
        <InputGroupAddon align="inline-end" className="pr-2">
          <ColorPicker
            value={field.value}
            onChange={(color) => field.onChange(color.toString(format))}
          >
            <Popover modal>
              <PopoverTrigger asChild>
                <ColorSwatch className="cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent className="p-1 max-w-full w-full">
                <ColorArea
                  colorSpace="rgb"
                  defaultValue={defaultValue}
                  xChannel="red"
                  yChannel="green"
                  xName="red"
                  yName="green"
                />
              </PopoverContent>
            </Popover>
          </ColorPicker>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

export function ColorArea({ className, ...props }: ColorAreaProps) {
  return (
    <ColorAreaPrimitive
      {...props}
      data-slot="color-area"
      className={cn(
        "w-full size-56 shrink-0 rounded-sm bg-muted disabled:bg-muted-fg",
        className
      )}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled ? undefined : defaultStyle.background,
      })}
    >
      <ColorThumb />
    </ColorAreaPrimitive>
  );
}

export function ColorThumb({ className, ...props }: ColorThumbProps) {
  return (
    <ColorThumbPrimitive
      {...props}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        backgroundColor: isDisabled ? undefined : defaultStyle.backgroundColor,
      })}
      className={cn(
        "top-[50%] left-[50%] size-6 rounded-full border-2 border-white [box-shadow:0_0_0_1px_black,_inset_0_0_0_1px_black]",
        "focus-visible:size-8",
        "dragging:bg-muted-fg dragging:forced-colors:bg-[ButtonBorder]",
        "disabled:opacity-50 disabled:forced-colors:border-[GrayText] disabled:forced-colors:bg-[GrayText]",
        className
      )}
    />
  );
}

export function ColorSlider({ className, ...props }: ColorSliderProps) {
  return (
    <ColorSliderPrimitive
      data-slot="control"
      className={cn(
        "orientation-vertical:flex orientation-horizontal:grid orientation-horizontal:w-full grid-cols-[1fr_auto] flex-col items-center gap-2",
        className
      )}
      {...props}
    />
  );
}

export function ColorSliderOutput({ className, ...props }: SliderOutputProps) {
  return (
    <SliderOutputPrimitive
      className={cn(
        "orientation-vertical:hidden font-medium text-base/6 sm:text-sm/6",
        className
      )}
      {...props}
    />
  );
}

export function ColorSliderTrack({ className, ...props }: SliderTrackProps) {
  return (
    <SliderTrackPrimitive
      className={cn(
        "group col-span-2 orientation-horizontal:h-6 rounded-lg",
        "orientation-horizontal:h-6 orientation-horizontal:w-full",
        "orientation-vertical:-translate-x-[50%] orientation-vertical:ml-[50%] orientation-vertical:h-56 orientation-vertical:w-6",
        "bg-muted-fg disabled:opacity-50 forced-colors:bg-[GrayText]",
        className
      )}
      {...props}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled
          ? undefined
          : `${defaultStyle.background}, repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
      })}
    />
  );
}

const ColorPicker = ({ className, ...props }: ColorPickerProps) => {
  return (
    <div data-slot="control" className={className}>
      <ColorPickerPrimitive {...props} />
    </div>
  );
};

const EyeDropper = () => {
  const state = React.use(ColorPickerStateContext)!;

  if (!window.EyeDropper) {
    return "EyeDropper is not supported in your browser.";
  }

  return (
    <Button
      className="shrink-0"
      aria-label="Eye dropper"
      size="icon"
      onClick={() => {
        const eyeDropper = window.EyeDropper ? new window.EyeDropper() : null;
        eyeDropper
          ?.open()
          .then((result) => state.setColor(parseColor(result.sRGBHex)));
      }}
    >
      <Pipette />
    </Button>
  );
};

export function ColorSwatch({ className, ...props }: ColorSwatchProps) {
  return (
    <ColorSwatchPrimitive
      data-slot="color-swatch"
      className={cn(
        "size-5 inset-ring-1 inset-ring-current/20 shrink-0 rounded-[calc(var(--radius-sm)-1px)]",
        className
      )}
      {...props}
    />
  );
}

export default ColorPickerField;
