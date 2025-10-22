import registry from "@/registry.json";
import Link from "next/link";
import { Button } from "./ui/button";

const kebabToPascalCase = (str: string) =>
  str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

export const SiteComponentsGrid: React.FC = () => {
  return (
    <div className="w-full !h-full flex flex-col flex-1">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
        {registry.items.map((item) => (
          <Button
            asChild
            key={item.name}
            variant="secondary"
            className="text-left"
          >
            <Link
              key={`/docs/components/${item.name}`}
              href={`/docs/components/${item.name}`}
              className="inline-flex items-center gap-2 text-lg font-medium no-underline md:text-base"
            >
              {kebabToPascalCase(item.name)}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
