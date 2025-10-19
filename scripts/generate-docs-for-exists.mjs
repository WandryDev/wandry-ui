#!/usr/bin/env node

import fs from "fs";
import path from "path";

import { createComponentDoc } from "./add-component-doc.mjs";
import { addComponentDemo } from "./add-component-demo.mjs";

const registryPath = path.resolve("./", "registry.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"));

const components = [
  "async-autocomplete-field",
  "checkbox-field",
  "input-otp-field",
  "password-field",
  "radio-field",
  "select-field",
  "switch-field",
  "textarea-field",
];

components.forEach((componentName) => {
  const item = registry.items.find((item) => item.name === componentName);

  const doc = createComponentDoc(item);
  const componentDemo = addComponentDemo(componentName);

  fs.writeFileSync(componentDemo.path, componentDemo.template);
  fs.writeFileSync(doc.path, doc.template);
});
