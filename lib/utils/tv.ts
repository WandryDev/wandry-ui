import { createTV } from "tailwind-variants";

import { cn } from "./cn";

export type { VariantProps, ClassValue } from "tailwind-variants";

export const tv = createTV({
  twMerge: cn as any,
});
