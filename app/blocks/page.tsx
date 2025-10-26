import { BlockDisplay } from "@/components/block-display";
import { Tabs, TabsContent } from "@/components/tabs.unstyled";

import { getRegistryBlocks } from "@/lib/registry";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const blockNameToCategory = (name: string) => {
  return name.split("-")[0];
};

export default async function BlocksPage() {
  const blocks = getRegistryBlocks();

  const groupedBlocks = blocks.reduce<Record<string, typeof blocks>>(
    (groups, block) => {
      const category = blockNameToCategory(block.name);
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(block);
      return groups;
    },
    {}
  );

  return (
    <div className="flex flex-col gap-12 md:gap-24 px-6">
      <Tabs defaultValue={Object.keys(groupedBlocks)[0]}>
        <TabsList className="bg-transparent my-6">
          {Object.keys(groupedBlocks).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="capitalize transition-all data-[state=active]:text-xl data-[state=active]:opacity-100 text-lg opacity-50 !bg-transparent data-[state=active]:bg-transparent dark:data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30  data-[state=active]:shadow-none text-foreground dark:text-muted-foreground"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(groupedBlocks).map(([category, blocks]) => (
          <TabsContent key={category} value={category}>
            {blocks.map((block) => (
              <BlockDisplay name={block.name} key={block.name} />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
