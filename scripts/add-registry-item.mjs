import fs from "fs";
import path from "path";

const registryPath = path.resolve("./", "registry.json");

export const addRegistryItem = (answers) => {
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"));

  const newRegistryItem = {
    name: answers.name,
    title: answers.title,
    type: answers.registryType,
    description: answers.description,
    dependencies: answers.dependencies.split(" "),
    registryDependencies: answers.registryDependencies,
    files: [{ path: answers.filePath, type: answers.registryType }],
  };

  registry.items.push(newRegistryItem);

  return {
    registry,
    item: newRegistryItem,
  };
};
