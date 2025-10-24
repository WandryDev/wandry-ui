import { kebabToPascalCase } from "../utils.mjs";

export const getDocComponentTemplate = (registryItem) => {
  if (!registryItem) return null;

  return `---
title: ${registryItem.title}
description: ${registryItem.description}
---

## Installation

<CodeBlockCommand
  __pnpm__="pnpm dlx shadcn@latest add https://ui.wandry.com.ua/r/${
    registryItem.name
  }.json"
  __npm__="npx shadcn@latest add https://ui.wandry.com.ua/r/${
    registryItem.name
  }.json"
  __bun__="bunx --bun shadcn@latest add https://ui.wandry.com.ua/r/${
    registryItem.name
  }.json"
  __yarn__="yarn dlx shadcn@latest add https://ui.wandry.com.ua/r/${
    registryItem.name
  }.json"
/>

## Usage

<ComponentPreview
  src="/registry/examples/${registryItem.name}-demo.tsx"
  name="${registryItem.name}-demo"
  description="${registryItem.description}"
  align="center"
/>

## Props

<AutoTypeTable path="registry/wandry-ui/${
    registryItem.name
  }.tsx" name="${kebabToPascalCase(registryItem.name)}Props" />
    `;
};
