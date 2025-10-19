import fs from "fs";
import path from "path";

import { spawn } from "child_process";

const registryDepsPath = path.resolve("./", "components/ui");

export const installRegistryDeps = async (answers) => {
  const registryDeps = answers.registryDependencies.split(" ") ?? [];

  console.log("registryDeps?.length", registryDeps?.length);

  if (!registryDeps?.length) return;

  for (const dep of registryDeps) {
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
