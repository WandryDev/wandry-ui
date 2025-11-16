export const readRegistry = async (path: string) => {
  // const { sdkHeader } = getEnv();

  const res = await fetch(path, {
    headers: { "Cache-Control": "no-cache", ["X-Wandry-Analytics"]: "true" },
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch registry from ${path}: ${await res.text()}`
    );
  }

  return res.json();
};
