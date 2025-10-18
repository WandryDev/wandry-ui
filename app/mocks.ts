"use client";

import { Option } from "@/registry/wandry-ui/async-autocomplete-field";

export const loadFrameworksOptions = (q: string) => {
  return new Promise<Option[]>((resolve) => {
    setTimeout(() => {
      const frameworks = [
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "angular", label: "Angular" },
        { value: "svelte", label: "Svelte" },
        { value: "ember", label: "Ember" },
        { value: "backbone", label: "Backbone" },
      ];
      const filtered = frameworks.filter((f) =>
        f.label.toLowerCase().includes(q.toLowerCase())
      );
      resolve(filtered);
    }, 1000);
  });
};

export const onResend = () => console.log("Resend OTP");
