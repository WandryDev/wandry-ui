"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import TextField from "@/registry/wandry-ui/text-field";
import SelectField from "@/registry/wandry-ui/select-field";
import TextareaField from "@/registry/wandry-ui/textarea-field";
import CheckboxField from "@/registry/wandry-ui/checkbox-field";
import SubmitButton from "@/registry/wandry-ui/submit-button";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <Form action="" defaultValues={{ query_caching: true }}>
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
                name="birthyear"
                label="Birth year"
                autoComplete="birthyear"
                placeholder="1990"
                classes={{ field: "col-span-full sm:col-span-3" }}
              />

              <SelectField
                classes={{ field: "col-span-full sm:col-span-3" }}
                selectProps={{ disabled: true }}
                name="role"
                label="Role"
                description="Roles can only be changed by system admin."
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
            <fieldset>
              <legend className="text-sm font-medium text-foreground dark:text-foreground">
                Team
              </legend>
              <p className="mt-1 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
                Configure the types of team alerts you want to receive.
              </p>
              <div className="mt-2  space-y-2">
                <CheckboxField
                  name="team_requests"
                  label="Team join requests"
                />
                <CheckboxField
                  name="team_activity_digest"
                  label="Weekly team activity digest"
                />
              </div>
            </fieldset>
            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-foreground dark:text-foreground">
                Usage
              </legend>
              <p className="mt-1 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
                Configure the types of usage alerts you want to receive.
              </p>
              <div className="mt-2 space-y-2">
                <CheckboxField name="api_requests" label="API requests" />
                <CheckboxField
                  name="workspace_execution"
                  label="Workspace loading times"
                />
                <CheckboxField name="query_caching" label="Query caching" />
                <CheckboxField name="storage" label="Storage" />
              </div>
            </fieldset>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex items-center justify-end space-x-4 my-4">
          <Button type="button" variant="outline" className="whitespace-nowrap">
            Go back
          </Button>
          <SubmitButton className="whitespace-nowrap">Apply</SubmitButton>
        </div>
      </Form>
    </div>
  );
};

export default Page;
