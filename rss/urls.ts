import { GenerateRssOptions, RegistryItem, RegistryItemType } from "./types";

const isFileContains = (
  registryItem: RegistryItem,
  fileType: string
): boolean => {
  console.log("registryItem.files", registryItem.files);
  return registryItem.files.some((file) => file.path.includes(fileType));
};

const isFileItemContainsType = (registryItem: RegistryItem, type: string) => {
  return registryItem.files.some((file) => file.type === type);
};

export const determinateRegistyItemType = (
  registryItem: RegistryItem
): RegistryItemType => {
  if (
    ["registry:ui", "registry:component"].includes(registryItem.type) ||
    isFileContains(registryItem, "/ui/") ||
    isFileContains(registryItem, "/components/") ||
    isFileItemContainsType(registryItem, "registry:component")
  ) {
    return "component";
  }

  if (
    ["registry:block", "registry:page"].includes(registryItem.type) ||
    isFileContains(registryItem, "/blocks/") ||
    isFileItemContainsType(registryItem, "registry:block") ||
    isFileItemContainsType(registryItem, "registry:page")
  ) {
    return "block";
  }

  return "unknown";
};

export const getRegistryItemPath = (
  registryItem: RegistryItem,
  config: GenerateRssOptions
) => {
  const type = determinateRegistyItemType(registryItem);

  if (type === "component") {
    return config.componentsUrl;
  }

  if (type === "block") {
    return config.blocksUrl;
  }

  return "";
};
