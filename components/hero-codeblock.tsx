"use client";

import {
  BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from "@/components/kibo-ui/code-block";

import { Form } from "@wandry/inertia-form";
import { PasswordField, TextField } from "@/registry/wandry-ui";
import { Button } from "./ui/button";

const LoginFormCode = [
  {
    language: "tsx",
    filename: "LoginForm.tsx",
    code: `import * as React from "react";
import {Form} from "@wandry/inertia-form"

import {TextField} from '@/components/text-field';
import {PasswordField} from '@/components/password-field';
import {Button} from '@/components/ui/button';  


export default function LoginForm() {
  return (
   <div className="border rounded-md flex flex-col flex-1  justify-center min-w-[20vw] px-6 relative">
        <div className="flex flex-row items-center border-b bg-secondary p-2 w-full absolute top-0 left-0">
          <div className="flex items-center gap-x-1">
            <span className="size-3 bg-red-500 rounded-full" />
            <span className="size-3 bg-yellow-500 rounded-full" />
            <span className="size-3 bg-green-500 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <h1 className="text-xl font-bold text-left">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Form action="/login" method="post" className="space-y-4">
          <TextField
            name="email"
            label="Email"
            placeholder="example, user@example.com"
          />
          <PasswordField name="password" label="Password" />
          <div className="flex flex-col">
            <Button type="submit">Login</Button>
            <Button variant="link">Signup</Button>
          </div>
        </Form>
      </div>
  );
}

`,
  },
];

export const HeroCodeblock = () => {
  return (
    <div className="flex items-stretch gap-x-4 min-h-[50vh] max-h-[50vh]">
      <CodeBlock
        data={LoginFormCode}
        defaultValue={LoginFormCode[0].language}
        className="max-h-[50vh] overflow-y-auto"
      >
        <CodeBlockHeader>
          <CodeBlockFiles>
            {(item) => (
              <CodeBlockFilename key={item.language} value={item.language}>
                {item.filename}
              </CodeBlockFilename>
            )}
          </CodeBlockFiles>
          <CodeBlockSelect>
            <CodeBlockSelectTrigger>
              <CodeBlockSelectValue />
            </CodeBlockSelectTrigger>
            <CodeBlockSelectContent>
              {(item) => (
                <CodeBlockSelectItem key={item.language} value={item.language}>
                  {item.language}
                </CodeBlockSelectItem>
              )}
            </CodeBlockSelectContent>
          </CodeBlockSelect>
          <CodeBlockCopyButton
            onCopy={() => console.log("Copied code to clipboard")}
            onError={() => console.error("Failed to copy code to clipboard")}
          />
        </CodeBlockHeader>
        <CodeBlockBody>
          {(item) => (
            <CodeBlockItem key={item.language} value={item.language}>
              <CodeBlockContent language={item.language as BundledLanguage}>
                {item.code}
              </CodeBlockContent>
            </CodeBlockItem>
          )}
        </CodeBlockBody>
      </CodeBlock>

      <div className="border rounded-md flex flex-col flex-1 justify-center min-w-[22vw] px-6 relative bg-white">
        <div className="flex flex-row items-center border-b bg-secondary p-2 pb-4 w-full absolute top-0 left-0">
          <div className="flex items-center gap-x-1 mt-2">
            <span className="size-3 bg-red-500 rounded-full" />
            <span className="size-3 bg-yellow-500 rounded-full" />
            <span className="size-3 bg-green-500 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col mb-6 mt-12">
          <h1 className="text-xl font-bold text-left">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Form action="/login" method="post" className="space-y-4">
          <TextField
            name="email"
            label="Email"
            placeholder="example, user@example.com"
          />
          <PasswordField name="password" label="Password" />
          <div className="flex flex-col">
            <Button type="submit">Login</Button>
            <Button variant="link">Signup</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
