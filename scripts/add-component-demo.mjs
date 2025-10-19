import { getComponentDemoTemplate } from "./templates/component-demo.mjs";

const componentDemoFolderPath = "registry/wandry-ui/examples";

export const addComponentDemo = (componentName) => {
  const componentDemoTemplate = getComponentDemoTemplate(componentName);
  const componentDemoFilePath = `${componentDemoFolderPath}/${componentName}-demo.tsx`;

  return {
    path: componentDemoFilePath,
    template: componentDemoTemplate,
  };
};
