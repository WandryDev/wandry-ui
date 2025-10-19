import { CodeBlock, Pre } from "./codeblock";

export function ComponentInstallation({
  name,
  ...props
}: React.ComponentProps<"div"> & {
  name: string;
}) {
  return (
    <CodeBlock keepBackground {...props}>
      <Pre>shadcn@latest add https://wandry-ui/r/{name}.json</Pre>
    </CodeBlock>
  );
}
