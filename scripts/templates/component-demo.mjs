import { kebabToPascalCase } from "../utils.mjs";

export const getComponentDemoTemplate = (componentName) => {
  const componentDemoFNName = kebabToPascalCase(`${componentName}-demo`);
  const componentDemoPropsName = `${componentDemoFNName}Props`;

  const componentFNName = kebabToPascalCase(componentName);
  const componentPropsName = `${componentFNName}Props`;

  return `"use client";
import * as React from "react";
import {Form} from "@wandry/inertia-form";

import { ${componentFNName}, ${componentPropsName} } from "../wandry-ui";

export type ${componentDemoPropsName} = {}

const ${componentDemoFNName}: React.FC<${componentDemoPropsName}> = (props) => {
  return ();
}

export default ${componentDemoFNName};
`;
};
