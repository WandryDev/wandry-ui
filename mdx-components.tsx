import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { createGenerator } from "fumadocs-typescript";
import { AutoTypeTable } from "fumadocs-typescript/ui";

import * as TabsComponents from "fumadocs-ui/components/tabs";
import * as WandryUI from "@/registry/wandry-ui";

import { ComponentInstallation } from "@/components/component-installation";
import { ComponentPreview } from "@/components/component-preview";

import * as WandryUIForm from "@wandry/inertia-form";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";

const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),

    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    ComponentPreview,
    ComponentInstallation,
    ...TabsComponents,
    ...WandryUI,
    ...WandryUIForm,
    ...components,
  };
}
