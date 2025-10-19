import path from "path";

import { getDocComponentTemplate } from "./templates/doc-component.mjs";

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

    return {
      path: docComponentFilePath,
      template: docComponentTemplate,
    };
  } catch (error) {
    console.error("Error creating doc component:", error);
    return;
  }
};
