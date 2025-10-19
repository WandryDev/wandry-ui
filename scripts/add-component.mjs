#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { getComponentStepperInputs } from "./component-stepper.mjs";
import { addRegistryItem } from "./add-registry-item.mjs";
import { getComponentTemplate } from "./templates/component.mjs";
import { installRegistryDeps } from "./install-registry-deps.mjs";

const registryPath = path.resolve("./", "registry.json");

try {
  const answers = await getComponentStepperInputs();

  if (!answers.isRightComponentPath) {
    console.log("Aborting...");
    process.exit(0);
  } else {
    if (fs.existsSync(answers.componentFilePath)) {
      console.error("Component path exists.");
      process.exit(0);
    }
  }

  const { registry, item } = addRegistryItem(answers);

  const componentTemplate = getComponentTemplate(answers.componentName);

  fs.writeFileSync(answers.componentFilePath, componentTemplate);
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));

  console.log(`Component ${answers.componentName} created successfully!`);

  await installRegistryDeps(answers);
} catch (error) {
  if (error instanceof Error && error.name === "ExitPromptError") {
    console.log("Aborting...");
  } else {
    throw error;
  }
}
