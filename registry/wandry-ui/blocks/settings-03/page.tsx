"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import TextField from "@/registry/wandry-ui/text-field";
import SelectField from "@/registry/wandry-ui/select-field";
import ChoiseboxField from "@/registry/wandry-ui/choisebox-field";

import { Separator } from "@/components/ui/separator";
import SubmitButton from "../../submit-button";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-lg font-semibold text-foreground">
          Apply for early access
        </h3>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <Form action="#" method="post" className="mt-8">
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
              type="email"
              name="email"
              label="Work email"
              autoComplete="email"
              placeholder="emma@company.com"
              classes={{ field: "col-span-full" }}
            />
            <TextField
              name="company"
              label="Company"
              autoComplete="organization"
              placeholder="Company, Inc."
              classes={{ field: "col-span-full  sm:col-span-3" }}
            />

            <SelectField
              name="size"
              label="Company size (employees)"
              classes={{ field: "col-span-full sm:col-span-3" }}
              options={[
                { value: "1-9", label: "1-9" },
                { value: "10-50", label: "10-50" },
                { value: "51-250", label: "51-250" },
                { value: "251+", label: "251+" },
              ]}
            />

            <Separator className="col-span-full my-4" />
            <ChoiseboxField
              classes={{ field: "col-span-full" }}
              orientation="horizontal"
              name="package"
              label="Select a workspace package"
              options={[
                {
                  value: "1",
                  label: "Starter",
                  description: "Up to 10,000 requests per day.",
                },
                {
                  value: "2",
                  label: "Premium",
                  description: "500,000 requests per day¹",
                },
                {
                  value: "3",
                  label: "Enterprise",
                  description: "Based on your specific needs",
                },
              ]}
            />

            {/* <p className="mt-6 text-xs text-muted-foreground">
              <sup>1</sup> $0.5/10K requests after limit reach.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              <sup>2</sup> No credit card required for registration.
            </p> */}
          </div>
          <Separator className="my-8" />
          <div className="flex items-center justify-end space-x-4 my-4">
            <Button
              type="button"
              variant="outline"
              className="whitespace-nowrap"
            >
              Go back
            </Button>
            <SubmitButton className="whitespace-nowrap">Apply</SubmitButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Page;
