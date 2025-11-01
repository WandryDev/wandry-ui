"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";
import { X } from "lucide-react";

import ArrayField from "@/registry/wandry-ui/array-field";
import TextField from "@/registry/wandry-ui/text-field";

import { Button } from "@/components/ui/button";

export type ArrayFieldDemoProps = {};

const ArrayFieldDemo: React.FC<ArrayFieldDemoProps> = (props) => {
  return (
    <Form
      action="#"
      defaultValues={{ emails: [{ address: "test@test.com" }] }}
      className="space-y-1"
    >
      <ArrayField
        name="emails"
        label="Email Addresses"
        description="Add up to 5 email addresses where we can contact you."
      >
        {(name, { remove }) => (
          <TextField
            key={`${name}.address`}
            name={`${name}.address`}
            placeholder="Enter email"
            addonRight={
              <Button type="button" variant="ghost" onClick={remove}>
                <X />
              </Button>
            }
          />
        )}
      </ArrayField>
    </Form>
  );
};

export default ArrayFieldDemo;
