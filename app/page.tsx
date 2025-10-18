import * as React from "react";

import { CreditCard, User } from "lucide-react";
import { Form } from "@wandry/inertia-form";

import { loadFrameworksOptions, onResend } from "./mocks";
import { Button } from "@/components/ui/button";

import TextField from "@/registry/wandry-ui/text-field";
import SelectField from "@/registry/wandry-ui/select-field";
import CheckboxField from "@/registry/wandry-ui/checkbox-field";
import RadioField from "@/registry/wandry-ui/radio-field";
import TextareaField from "@/registry/wandry-ui/textarea-field";
import PasswordField from "@/registry/wandry-ui/password-field";
import SwitchField from "@/registry/wandry-ui/switch-field";
import AsyncAutocompleteField from "@/registry/wandry-ui/async-autocomplete-field";
import InputOtpField from "@/registry/wandry-ui/input-otp-field";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-10">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Wandry UI</h1>
        <p className="text-muted-foreground">
          A registry with a fully-controlled form elements
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

      <main className="flex flex-col  gap-4">
        <h2 className="text-2xl font-medium pb-2 border-b">Textarea Field</h2>
        <div className="flex justify-center relative ">
          <Form action="#" className="w-full space-y-2">
            <TextareaField
              name="description"
              label="Description"
              placeholder="Enter a brief description"
              description="This will be displayed on your profile"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </main>

      <main className="flex flex-col  gap-4">
        <h2 className="text-2xl font-medium pb-2 border-b">Password Field</h2>
        <div className="flex justify-center relative ">
          <Form action="#" className="w-full space-y-2">
            <PasswordField
              name="password"
              label="Password"
              placeholder="Enter your password"
              description="This will be used to log in to your account"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </main>

      <main className="flex flex-col  gap-4">
        <h2 className="text-2xl font-medium pb-2 border-b">Switch Field</h2>
        <div className="flex justify-center relative ">
          <Form action="#" className="w-full space-y-2">
            <SwitchField
              name="2fa"
              label="Multi-factor authentication"
              description="Enable multi-factor authentication. If you do not have a two-factor device, you can use a one-time code sent to your email."
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </main>

      <main className="flex flex-col  gap-4">
        <h2 className="text-2xl font-medium pb-2 border-b">
          Async Autocomplete Field
        </h2>
        <div className="flex justify-center relative ">
          <Form action="#" className="w-full space-y-2">
            <AsyncAutocompleteField
              label="Frameworks"
              placeholder="Select a framework"
              description="Start typing to search for a framework"
              name="frameworks"
              loadOptions={loadFrameworksOptions}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </main>

      <main className="flex flex-col  gap-4">
        <h2 className="text-2xl font-medium pb-2 border-b">Input OTP Field</h2>
        <div className="flex justify-center relative ">
          <Form action="#" className="w-full space-y-2">
            <InputOtpField
              name="code"
              label="OTP Code"
              description="Enter the OTP sent to your email"
            />

            <InputOtpField
              name="code_r"
              label="OTP Code (with Resend)"
              description="Enter the OTP sent to your email"
              onResend={onResend}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </main>
    </div>
  );
}
