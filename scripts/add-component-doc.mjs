import fs from "fs";
import path from "path";

import { getDocComponentTemplate } from "./templates/doc-component";

const docComponentsFolderPath = path.resolve("content/docs/components");

export const createComponentDoc = (regirstyItem) => {
  try {
    const docComponentTemplate = getDocComponentTemplate(regirstyItem);

    if (!docComponentTemplate) {
      console.error("Registry item is undefined. Cannot create doc component.");
      return;
    }

    const docComponentFilePath = path.join(
      docComponentsFolderPath,
      `${regirstyItem.name}.mdx`
    );

    fs.writeFileSync(docComponentFilePath, docComponentTemplate);

    return docComponentFilePath;
  } catch (error) {
    console.error("Error creating doc component:", error);
    return;
  }
};
