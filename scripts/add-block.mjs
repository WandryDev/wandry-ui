import fs from "fs";
import path from "path";

import { addRegistryItem } from "./add-registry-item.mjs";
import { getBlockStepperInputs } from "./component-stepper.mjs";
import { getBlockTemplate } from "./templates/block.mjs";

const registryPath = path.resolve("./", "registry.json");

try {
  const answers = await getBlockStepperInputs();

  if (!answers.isRightComponentPath) {
    console.log("Aborting...");
    process.exit(0);
  } else {
    if (fs.existsSync(answers.componentFilePath)) {
      console.error("Component path exists.");
      process.exit(0);
    }
  }

  const { registry } = addRegistryItem(answers);
  const blockTemplate = getBlockTemplate(answers.blockName);

  fs.mkdirSync(path.dirname(answers.name));
  fs.writeFileSync(answers.blockFilePath, blockTemplate);
  fs.writeSync(registryPath, JSON.stringify(registry, null, 2));

  console.log("\n");
  console.log(`- Create block at ${answers.blockFilePath}`);
  console.log(`✅ Block ${answers.blockName} created successfully!`);
} catch (error) {
  if (error instanceof Error && error.name === "ExitPromptError") {
    console.log("Aborting...");
  } else {
    throw error;
  }
}
