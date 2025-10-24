import { kebabToPascalCase } from "../utils.mjs";

export const getComponentDemoTemplate = (componentName) => {
  const componentDemoFNName = kebabToPascalCase(`${componentName}-demo`);
  const componentDemoPropsName = `${componentDemoFNName}Props`;

  const componentFNName = kebabToPascalCase(componentName);

  return `"use client";
import * as React from "react";
import {Form} from "@wandry/inertia-form";

import ${componentFNName} from "@/registry/wandry-ui/${componentName}.tsx";

export type ${componentDemoPropsName} = {}

const ${componentDemoFNName}: React.FC<${componentDemoPropsName}> = (props) => {
  return <Form action="#">
    ...
  </Form>;
}

export default ${componentDemoFNName};
`;
};
