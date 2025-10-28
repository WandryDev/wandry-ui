"use client";

import * as React from "react";
import { useField } from "@wandry/inertia-form";
import { FileText, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export type FileFieldProps = {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  accept?: string;
  errorName?: string;
};

const FileField: React.FC<FileFieldProps> = ({
  name,
  label,
  description,
  accept,
  errorName,
}) => {
  const field = useField(name, { defaultValue: [] as File[], errorName });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      field.onChange(Array.from(e.target.files));
    }
  };
  const removeFile = (index: number) => {
    field.onChange(field.value.filter((_: File, i: number) => i !== index));
  };

  return (
    <Field>
      <FieldLabel htmlFor={name}>{label} </FieldLabel>
      <Input
        id={name}
        type="file"
        multiple
        onChange={handleFileChange}
        accept={accept}
      />
      {field.value.length > 0 && (
        <div className="space-y-2">
          {field.value.map((file: File, index: number) => (
            <div
              className="flex items-center justify-between rounded-md border p-2"
              key={index}
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-ellipsis max-w-[60%]">
                  {file.name}
                </span>
                <span className="text-muted-foreground text-xs">
                  ({(file.size / 1024).toFixed(1)} KB)
                </span>
              </div>
              <Button
                className="h-6 w-6"
                onClick={() => removeFile(index)}
                size="icon"
                type="button"
                variant="ghost"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
      <FieldDescription>{description}</FieldDescription>
    </Field>
  );
};

export default FileField;
