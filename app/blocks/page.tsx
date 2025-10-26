import { BlockDisplay } from "@/components/block-display";

export default async function BlocksPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-24">
      <BlockDisplay name="login-01" key="login-01" />
    </div>
  );
}
