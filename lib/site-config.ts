export const InertiaCodeDemo = `import * as React from "react";
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function LoginForm() {
  return (
    <AuthLayout
        title="Create an account"
        description="Enter your details below to create your account"
    >
        <Head title="Register" />
        <Form
            {...RegisteredUserController.store.form()}
            resetOnSuccess={['password', 'password_confirmation']}
            disableWhileProcessing
            className="flex flex-col gap-6"
        >
            {({ processing, errors }) => (
                <>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="name"
                                name="name"
                                placeholder="Full name"
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                tabIndex={2}
                                autoComplete="email"
                                name="email"
                                placeholder="email@example.com"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                tabIndex={3}
                                autoComplete="new-password"
                                name="password"
                                placeholder="Password"
                            />
                            <InputError message={errors.password} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password_confirmation">
                                Confirm password
                            </Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                required
                                tabIndex={4}
                                autoComplete="new-password"
                                name="password_confirmation"
                                placeholder="Confirm password"
                            />
                            <InputError
                                message={errors.password_confirmation}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="mt-2 w-full"
                            tabIndex={5}
                            data-test="register-user-button"
                        >
                            {processing && <Spinner />}
                            Create account
                        </Button>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <TextLink href={login()} tabIndex={6}>
                            Log in
                        </TextLink>
                    </div>
                </>
            )}
        </Form>
    </AuthLayout>
  );
}
`;

export const WandryCodeDemo = `import * as React from "react";
import { login } from '@/routes';
import { Head } from '@inertiajs/react';
import { Form } from '@wandry/inertia-form';

import TextField from '@/components/text-field';
import PasswordField from '@/components/password-field';

import { Button } from '@/components/ui/button';

export default function LoginForm() {
  return (
    <AuthLayout
        title="Create an account"
        description="Enter your details below to create your account"
    >
        <Head title="Register" />
        <Form
            {...RegisteredUserController.store.form()}
            className="flex flex-col gap-6"
        >
            <div className="grid gap-6">
                <TextField name="name" label="Name" placelholder="Full name"/>
                <TextField type="email" name="email" label="Email" placelholder="email@example.com"/>
                <PasswordField name="password" label="Password" placelholder="Password"/>
                <PasswordField name="password_confirmation" label="Confirm password" placelholder="Confirm password"/>

                <Button type="submit">Create account</Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <TextLink href={login()} tabIndex={6}>
                    Log in
                </TextLink>
            </div>
        </Form>
    </AuthLayout>
  );
}
`;

export const githubLink = "https://github.com/WandryDev/wandry-ui";
export const twitterLink = "https://x.com/kapish_dima";
export const analyticsLink = "https://analytics.wandry.com.ua";
