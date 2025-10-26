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
    if (fs.existsSync(answers.filePath)) {
      console.error("Component path exists.");
      process.exit(0);
    }
  }

  const { registry } = addRegistryItem(answers);
  const blockTemplate = getBlockTemplate(answers.blockName);

  fs.mkdirSync(answers.blockDirPath, { recursive: true });
  fs.writeFileSync(answers.filePath, blockTemplate);
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));

  console.log("\n");
  console.log(`- Create block at ${answers.filePath}`);
  console.log(`✅ Block ${answers.blockName} created successfully!`);
} catch (error) {
  if (error instanceof Error && error.name === "ExitPromptError") {
    console.log("Aborting...");
  } else {
    throw error;
  }
}
