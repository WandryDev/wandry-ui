import path from "path";

import { getComponentDemoTemplate } from "./templates/component-demo.mjs";

const componentDemoFolderPath = "registry/examples";

export const addComponentDemo = (componentName) => {
  const componentDemoTemplate = getComponentDemoTemplate(componentName);
  const componentDemoFilePath = path.join(
    componentDemoFolderPath,
    `${componentName}-demo.tsx`
  );

  return {
    path: componentDemoFilePath,
    template: componentDemoTemplate,
  };
};
