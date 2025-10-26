import { Form } from "@wandry/inertia-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";

import PasswordField from "@/registry/wandry-ui/password-field";
import TextField from "@/registry/wandry-ui/text-field";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form action="#">
          <FieldGroup>
            <TextField name="full-name" label="Full Name" />
            <TextField
              name="email"
              label="Email"
              type="email"
              placeholder="m@example.com"
            />
            <PasswordField
              name="password"
              label="Password"
              description="Must be at least 8 characters long."
            />
            <PasswordField
              name="confirm-password"
              label="Confirm Password"
              description="Please confirm your password."
            />
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="#">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </Form>
      </CardContent>
    </Card>
  );
}
