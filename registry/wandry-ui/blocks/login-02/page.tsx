"use client";
import * as React from "react";
import { LoginForm } from "./components/login-form";

const Page = () => {
  return (
    <div className="bg-muted flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
