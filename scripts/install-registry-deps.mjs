import fs from "fs";
import path from "path";

import { spawn } from "child_process";

const registryDepsPath = path.resolve("./", "components/ui");

export const installRegistryDeps = async (answers) => {
  if (!answers.registryDependencies?.length) return;

  for (const dep of answers.registryDependencies) {
    const depPath = path.join(registryDepsPath, `${dep}.tsx`);
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
};
