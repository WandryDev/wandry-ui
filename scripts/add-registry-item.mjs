import fs from "fs";
import path from "path";

const registryPath = path.resolve("./", "registry.json");

export const addRegistryItem = (answers) => {
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"));

  const newRegistryItem = {
    name: answers.componentName,
    title: answers.title,
    type: answers.registryType,
    description: answers.description,
    dependencies: answers.dependencies.split(" "),
    registryDependencies: answers.registryDependencies
      ? registryDependencies.split(" ")
      : [],
    files: [{ path: answers.componentFilePath, type: answers.registryType }],
  };

  registry.items.push(newRegistryItem);

  return {
    registry,
    item: newRegistryItem,
  };
};
