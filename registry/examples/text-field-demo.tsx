import React from "react";
import { Form } from "@wandry/inertia-form";
import { CreditCard } from "lucide-react";

import { TextField } from "../wandry-ui";

export default function TextFieldDemo() {
  return (
    <Form action="#" className="w-full space-y-2">
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
