import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type TextFieldProps = {};

const TextField: React.FC = () => {
  return (
    <Field>
      <FieldLabel htmlFor="checkout-7j9-card-name-43j">Name on Card</FieldLabel>
      <Input
        id="checkout-7j9-card-name-43j"
        placeholder="Evil Rabbit"
        required
      />
    </Field>
  );
};

export default TextField;
