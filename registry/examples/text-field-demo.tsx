import React from "react";
import { Form } from "@wandry/inertia-form";
import { CreditCard } from "lucide-react";

import TextField from "@/registry/wandry-ui/text-field";

export default function TextFieldDemo() {
  return (
    <Form action="#" className="w-[50%] space-y-2">
      <TextField
        name="card"
        label="Card Number"
        placeholder="1234 5678 9101 1213"
        description="Enter your 16-digit card number"
        addonLeft={<CreditCard />}
      />
    </Form>
  );
}
