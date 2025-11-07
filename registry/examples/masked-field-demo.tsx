"use client";
import * as React from "react";
import { Form } from "@wandry/inertia-form";

import MaskedField from "@/registry/wandry-ui/masked-field";

export type MaskedFieldDemoProps = {};

const MaskedFieldDemo: React.FC<MaskedFieldDemoProps> = (props) => {
  return (
    <Form action="#">
      <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MaskedField
          name="phone"
          mask="phone"
          placeholder="Enter your phone number"
          label="Phone number"
          description="Enter your phone number with area code"
        />
        <MaskedField
          name="birthDate"
          mask="date"
          placeholder="Enter your birth date"
          label="Birth date"
          description="Enter your birth date"
        />
        <MaskedField
          name="currency"
          mask="currency"
          placeholder="$0.00"
          label="Currency"
          description="Enter USD amount "
        />
        <MaskedField
          name="currency_eur"
          mask="currency"
          currency="EUR"
          locale="de-DE"
          placeholder="0,00 €"
          label="Currency (German)"
          description="Enter EUR amount "
        />
        <MaskedField
          name="creditCard"
          mask="creditCard"
          placeholder="Enter your credit card number"
          label="Credit card"
          description="Enter your credit card number"
        />
        <MaskedField
          name="percentage"
          mask="percentage"
          placeholder="0.00%"
          min={0}
          max={100}
          label="Percentage"
          description="Enter a percentage"
        />
      </div>
    </Form>
  );
};

export default MaskedFieldDemo;
