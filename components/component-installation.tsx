import { CodeBlock, Pre } from "./codeblock";
import { Tab, Tabs } from "./tabs";

export function ComponentInstallation({
  name,
  className,
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
