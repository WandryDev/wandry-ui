import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";

import TextField from "@/registry/wandry-ui/text-field";
import PasswordField from "@/registry/wandry-ui/password-field";
import { Form } from "@wandry/inertia-form";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form action="#">
            <FieldGroup>
              <TextField
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
              <TextField
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />

              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <PasswordField name="password" label="Password" required />
                  <PasswordField
                    name="confirm-password"
                    label="Confirm Password"
                    required
                  />
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>

              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="text-center">
                  Already have an account? <a href="#">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </Form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
