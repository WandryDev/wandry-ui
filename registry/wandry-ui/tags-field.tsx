"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useField } from "@wandry/inertia-form";
import { XCircle, XIcon } from "lucide-react";
import * as React from "react";

export type TagsFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
};

const TagsField: React.FC<TagsFieldProps> = ({
  name,
  label,
  description,
  placeholder,
}) => {
  const [value, setValue] = React.useState("");

  const field = useField<string[]>(name, { defaultValue: [] });

  const addTag = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== "Enter") return;
      event.stopPropagation();
      event.preventDefault();

      if (value.trim() !== "" && !field.value.includes(value.trim())) {
        field.onChange([...field.value, value.trim()]);
        setValue("");
      }
    },
    [value, field]
  );

  const removeTag = (tag: string, i: number) => {
    field.onChange(field.value.filter((t, index) => t !== tag && i !== index));
  };

  const createAllTags = () => {
    field.onChange([]);
    setValue("");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <Field className="max-w-">
      <FieldLabel>{label}</FieldLabel>
      <FieldDescription>{description}</FieldDescription>
      <InputGroup>
        <InputGroupInput
          value={value}
          onChange={onChange}
          onKeyDown={addTag}
          placeholder={placeholder}
        />
        {field.value?.length > 0 && (
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={createAllTags} type="button">
              <XCircle />
            </InputGroupButton>
          </InputGroupAddon>
        )}
      </InputGroup>
      <div className="flex flex-wrap gap-2 mt-2">
        {field.value.map((tag, index) => (
          <Button
            key={index}
            type="button"
            size="sm"
            variant="outline"
            onClick={() => removeTag(tag, index)}
          >
            {tag} <XIcon />
          </Button>
        ))}
      </div>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

export default TagsField;
