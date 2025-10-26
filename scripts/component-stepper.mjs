import { input, confirm, select } from "@inquirer/prompts";

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
const blockPath = "registry/wandry-ui/blocks/";

export const getComponentStepperInputs = async () => {
  try {
    const componentName = await input({
      message: "Enter component name (ex: submit-button)",
      required: true,
    });

    const componentFilePath = [componentPath, componentName, ".tsx"].join("");

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

    const registryType = "registry:component";

    const isRightComponentPath = await confirm({
      message: `Is this the correct component path? ${componentFilePath}`,
      default: true,
    });

    const needComponentDoc = await confirm({
      message: `Do you want to create a documentation file for this component?`,
      default: true,
    });

    const normilizedRegistryDependencies = registryDependencies
      .split(" ")
      .map((dep) => dep.trim())
      .filter((dep) => Boolean(dep));

    return {
      name: componentName,
      filePath: componentFilePath,
      title,
      description,
      dependencies,
      registryDependencies: normilizedRegistryDependencies,
      registryType,
      isRightComponentPath,
      needComponentDoc,
    };
  } catch (error) {
    console.error("Error getting component stepper inputs:", error);
  }
};

export const getBlockStepperInputs = async () => {
  try {
    const blockName = await input({
      message: "Enter block name (ex: login-01)",
      required: true,
    });

    const blockDirPath = [blockPath, blockName].join("");
    const blockFilePath = [blockDirPath, "/", "page.tsx"].join("");

    const title = await input({
      message: "Enter title",
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

    const registryType = "registry:block";

    const isRightComponentPath = await confirm({
      message: `Is this the correct component path? ${blockFilePath}`,
      default: true,
    });

    const normilizedRegistryDependencies = registryDependencies
      .split(" ")
      .map((dep) => dep.trim())
      .filter((dep) => Boolean(dep));

    return {
      name: blockName,
      blockDirPath,
      filePath: blockFilePath,
      title,
      description,
      dependencies,
      registryDependencies: normilizedRegistryDependencies,
      registryType,
      isRightComponentPath,
    };
  } catch (error) {
    console.error("Error getting component stepper inputs:", error);
  }
};
