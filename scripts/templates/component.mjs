import { kebabToPascalCase } from "../utils.mjs";

export const getComponentTemplate = (componentName) => {
  const componentFNName = kebabToPascalCase(componentName);
  const componentPropsName = `${componentFNName}Props`;

  return `"use client";
import * as React from "react";

export type ${componentPropsName} = {}

const ${componentFNName}: React.FC<${componentPropsName}> = (props) => {
  return ();
}

export default ${componentFNName};
`;
};

export const getComponentExportTemplate = (componentName) => {
  const componentFNName = kebabToPascalCase(componentName);

  return `export { default as ${componentFNName} } from "./${componentName}";\n`;
};
