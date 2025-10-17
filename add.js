#!/usr/bin/env node

import { input, confirm, select } from "@inquirer/prompts";
import { spawn } from "child_process";

import fs from "fs";
import path from "path";

const defaultComponentDepencies = "@wandry/inertia-form";
const defaultTitle = "Wandry UI Component";
const defaultDescription = "A component for Wandry UI";

const registryTypes = [
  {
    value: "registry:block",
    name: "registry:block",
    description: "Use for complex components with multiple files",
  },
  {
    value: "registry:component",
    name: "registry:component",
    description: "Use for simple components",
  },
  {
    value: "registry:lib",
    name: "registry:lib",
    description: "Use for lib and utils",
  },
  {
    value: "registry:hook",
    name: "registry:hook",
    description: "Use for hooks",
  },
  {
    value: "registry:ui",
    name: "registry:ui",
    description: "Use for UI components and single-file primitive",
  },
  {
    value: "registry:page",
    name: "registry:page",
    description: "Use for page or file-based routes",
  },
  {
    value: "registry:file",
    name: "registry:file",
    description: "Use for miscellaneous files",
  },
  {
    value: "registry:style",
    name: "registry:style",
    description: "Use for registry styles. eg. new-yor",
  },
  {
    value: "registry:theme",
    name: "registry:theme",
    description: "Use for themes",
  },
  {
    value: "registry:item",
    name: "registry:item",
    description: "Use for universal registry items.",
  },
];

const componentPath = "registry/wandry-ui/";
const registryDepsPath = path.resolve("./", "components/ui");
const registryPath = path.resolve("./", "registry.json");

const componentName = await input({
  message: "Enter component name",
  required: true,
});

const componentFilePath = [componentPath, componentName, ".tsx"].join("");

try {
  const title = await input({
    message: "Enter title (ex: submit-button)",
    default: defaultTitle,
  });

  const description = await input({
    message: "Enter description",
    default: defaultDescription,
  });

  const dependencies = await input({
    message: "Enter dependencies (space separated)",
    default: defaultComponentDepencies,
  });

  const registryDependencies = await input({
    message: "Enter registry dependencies (space separated)",
  });

  const registryType = await select({
    message: "Select registry type",
    choices: registryTypes.map((type) => ({
      name: type.name,
      value: type.value,
      description: type.description,
    })),
    default: "registry:component",
  });

  const isRightComponentPath = await confirm({
    message: `Is this the correct component path? ${componentFilePath}`,
    default: true,
  });

  if (!isRightComponentPath) {
    console.log("Aborting...");
    process.exit(0);
  } else {
    if (fs.existsSync(componentFilePath)) {
      console.log("Component path exists.");
      process.exit(0);
    } else {
      const componentFNName = componentName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");

      const componentPropsName = `${componentFNName}Props`;
      const componentTemplate = `"use client";
import * as React from "react";

export type ${componentPropsName} = {}

const ${componentFNName}: React.FC<${componentPropsName}> = (props) => {
  return ();
}

export default ${componentFNName};
`;

      fs.writeFileSync(componentFilePath, componentTemplate);
    }
  }

  const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"));

  registry.items.push({
    name: componentName,
    title: title,
    type: registryType,
    description: description,
    dependencies: dependencies.split(" "),
    registryDependencies: registryDependencies
      ? registryDependencies.split(" ")
      : [],
    files: [{ path: componentFilePath, type: registryType }],
  });

  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));

  console.log(`Component ${componentName} created successfully!`);

  const registryDeps = registryDependencies.split(" ") ?? [];

  for (const dep of registryDeps) {
    const depPath = path.join(registryDepsPath, dep, ".tsx");
    if (!fs.existsSync(depPath)) {
      console.log(
        `Registry dependency ${dep} does not exist at path ${depPath}`
      );
      const child = spawn("pnpm", ["dlx", "shadcn@latest", "add", dep], {
        stdio: "inherit",
      });

      child.on("exit", function (code, signal) {
        if (code) {
          console.log("Process exit with code " + code);
        }
        if (signal) {
          console.log("Process killed with signal " + signal);
        }
      });
    }
  }
} catch (error) {
  if (error instanceof Error && error.name === "ExitPromptError") {
    console.log("Aborting...");
  } else {
    throw error;
  }
}
