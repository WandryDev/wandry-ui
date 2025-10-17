import * as React from "react";

import { CreditCard, User } from "lucide-react";
import { Form } from "@wandry/inertia-form";

import TextField from "@/registry/wandry-ui/text-field";
import SelectField from "@/registry/wandry-ui/select-field";
import CheckboxField from "@/registry/wandry-ui/checkbox-field";
import RadioField from "@/registry/wandry-ui/radio-field";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-10">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col  gap-4">
        <h2 className="text-2xl font-medium pb-2 border-b">Text Field</h2>
        <div className="flex justify-center relative ">
          <Form action="#" className="w-full space-y-2">
            <TextField
              name="first_name"
              label="First Name"
              addonLeft={<User />}
            />
            <TextField
              name="card"
              label="Card Number"
              placeholder="1234 5678 9101 1213"
              description="Enter your 16-digit card number"
              addonLeft={<CreditCard />}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </main>

      <main className="flex flex-col  gap-4">
        <h2 className="text-2xl font-medium pb-2 border-b">Select Field</h2>
        <div className="flex justify-center relative ">
          <Form action="#" className="w-full space-y-2">
            <SelectField
              name="first_name"
              label="First Name"
              placeholder="Select your first name"
              options={[
                { value: "john", label: "John" },
                { value: "jane", label: "Jane" },
              ]}
              contentProps={{ position: "popper" }}
            />
            <SelectField
              name="last_name"
              label="Last Name"
              placeholder="Select your last name"
              options={{
                "Last Names A-M": [
                  { value: "anderson", label: "Anderson" },
                  { value: "brown", label: "Brown" },
                  { value: "martin", label: "Martin" },
                ],
                "Last Names N-Z": [
                  { value: "nguyen", label: "Nguyen" },
                  { value: "roberts", label: "Roberts" },
                  { value: "wilson", label: "Wilson" },
                ],
              }}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </main>
      <main className="flex flex-col  gap-4">
        <h2 className="text-2xl font-medium pb-2 border-b">Checkbox Field</h2>
        <div className="flex justify-center relative ">
          <Form action="#" className="w-full space-y-2">
            <CheckboxField
              name="is_checked"
              label="I agree to the terms and conditions"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </main>

      <main className="flex flex-col  gap-4">
        <h2 className="text-2xl font-medium pb-2 border-b">Radiogroup Field</h2>
        <div className="flex justify-center relative ">
          <Form action="#" className="w-full space-y-2">
            <RadioField
              name="plan"
              options={[
                { value: "monthly", label: "Monthly" },
                { value: "yearly", label: "Yearly" },
              ]}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </main>
    </div>
  );
}
