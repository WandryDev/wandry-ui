"use client";

import { useSearchParams } from "next/navigation";

export const useHideLayout = () => {
  const params = useSearchParams();
  const isHideLayout = params.get("embed") === "true";

  return isHideLayout;
};
