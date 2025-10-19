"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";

import { useField } from "@wandry/inertia-form";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
import { cn } from "@/lib/utils";

export type Option = {
  value: string;
  label: string;
};

export type LoadFn = (inputValue: string) => Promise<Option[]>;

export type AsyncAutocompleteFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  inputPlaceholder?: string;
  loadingPlaceholder?: string;
  initPlaceholder?: string;
  emptyPlaceholder?: string;
  loadOptions: LoadFn;
};

const AsyncAutocompleteField: React.FC<AsyncAutocompleteFieldProps> = ({
  name,
  label,
  description,
  placeholder = "Select an option",
  inputPlaceholder = "Type to search...",
  loadingPlaceholder = "Searching...",
  initPlaceholder = "Start typing to search",
  emptyPlaceholder = "No results found.",
  loadOptions,
}) => {
  const field = useField(name);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Option[]>([]);

  const onLoad = async (query: string) => {
    if (!query) {
      setResults([]);
      return;
    }
    setIsSearching(true);
    const options = await loadOptions(query);

    setIsSearching(false);
    setResults(options);
  };

  const onSelect = (option: Option) => {
    field.onChange(option);
    setOpen(false);
  };

  useEffect(() => {
    onLoad(query);
  }, [query]);

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            aria-expanded={open}
            className="justify-between"
            role="combobox"
            variant="outline"
          >
            {field.value?.label ?? placeholder}
            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
          <Command shouldFilter={false}>
            <CommandInput
              onValueChange={setQuery}
              placeholder={inputPlaceholder}
              value={query}
            />
            <CommandList>
              {isSearching ? (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="size-4 animate-spin" />
                  <span className="ml-2 text-muted-foreground text-sm">
                    {loadingPlaceholder}
                  </span>
                </div>
              ) : (
                <>
                  {!query && (
                    <div className="p-4 text-center text-muted-foreground text-sm">
                      {initPlaceholder}
                    </div>
                  )}
                  {query && results.length === 0 && !isSearching && (
                    <CommandEmpty>{emptyPlaceholder}</CommandEmpty>
                  )}
                  {results.length > 0 && (
                    <CommandGroup>
                      {results.map((option) => (
                        <CommandItem
                          key={option.value}
                          onSelect={() => onSelect(option)}
                          value={option.value}
                        >
                          <Check
                            className={cn(
                              "mr-2 size-4",
                              field.value?.value === option.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {option.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  )}
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FieldDescription>{description}</FieldDescription>
      <FieldError>{field.error}</FieldError>
    </Field>
  );
};

export default AsyncAutocompleteField;
