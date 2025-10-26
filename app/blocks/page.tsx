import { BlockDisplay } from "@/components/block-display";

import { getRegistryBlocks } from "@/lib/registry";

export default async function BlocksPage() {
  const blocks = getRegistryBlocks();

  console.log("blocks", blocks);

  return (
    <div className="flex flex-col gap-12 md:gap-24">
      {blocks.map((block) => (
        <BlockDisplay name={block.name} key={block.name} />
      ))}
    </div>
  );
}
