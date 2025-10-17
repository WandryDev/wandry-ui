import * as React from "react";

import { CreditCard, User } from "lucide-react";
import { Form } from "@wandry/inertia-form";

import TextField from "@/registry/wandry-ui/text-field";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-4">
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
          </Form>
        </div>
      </main>
    </div>
  );
}
