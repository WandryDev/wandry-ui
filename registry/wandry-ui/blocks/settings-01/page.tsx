"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import TextField from "@/registry/wandry-ui/text-field";
import SelectField from "@/registry/wandry-ui/select-field";
import TextareaField from "@/registry/wandry-ui/textarea-field";
import RadioField from "@/registry/wandry-ui/radio-field";

import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <Form action="">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-foreground dark:text-foreground">
              Personal information
            </h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <TextField
                name="first_name"
                label="First name"
                autoComplete="given-name"
                placeholder="Emma"
                classes={{ field: "col-span-full sm:col-span-3" }}
              />
              <TextField
                name="last_name"
                label="Last name"
                autoComplete="family-name"
                placeholder="Crown"
                classes={{ field: "col-span-full sm:col-span-3" }}
              />
              <TextField
                name="email"
                label="Email"
                autoComplete="email"
                placeholder="emma@company.com"
                classes={{ field: "col-span-full" }}
              />
              <TextField
                type="number"
                name="year"
                label="Birth year"
                placeholder="1990"
                description="Roles can only be changed by system admin."
                classes={{ field: "col-span-full sm:col-span-3" }}
              />
              <SelectField
                classes={{ field: "col-span-full sm:col-span-3" }}
                selectProps={{ disabled: true }}
                name="role"
                label="Role"
                options={[
                  { value: "junior", label: "Junior" },
                  { value: "mid", label: "Mid" },
                  { value: "senior", label: "Senior" },
                ]}
              />
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-foreground dark:text-foreground">
              Workspace settings
            </h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <TextField
                name="workspace-name"
                label="Workspace name"
                placeholder="Test workspace"
                classes={{ field: "col-span-full sm:col-span-3" }}
              />
              <SelectField
                name="visibility"
                label="Visibility"
                classes={{ field: "col-span-full sm:col-span-3" }}
                options={[
                  { value: "public", label: "Public" },
                  { value: "private", label: "Private" },
                ]}
              />
              <TextareaField
                rows={4}
                name="description"
                label="Workspace description"
                description="Note: description provided will not be displayed externally."
                classes={{ field: "col-span-full" }}
              />
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-semibold text-foreground dark:text-foreground">
              Notification settings
            </h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
          <div className="sm:max-w-3xl md:col-span-2">
            <RadioField
              label="Newsletter"
              description="Change how often you want to receive updates from our newsletter."
              name="receive"
              options={[
                { value: "every_week", label: "Every week" },
                { value: "every_month", label: "Every month" },
                { value: "never", label: "Never" },
              ]}
            />
          </div>
        </div>
        <Separator className="my-8" />
      </Form>
    </div>
  );
};

export default Page;
