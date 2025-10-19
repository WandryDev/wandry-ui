"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { source } from "@/lib/source";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const TOP_LEVEL_SECTIONS = [
  { name: "Get Started", href: "/docs" },
  { name: "Installation", href: "/docs/installation" },
  {
    name: "Components",
    href: "/docs/components",
  },
];

const EXCLUDED_FOLDERS = ["Getting Started", "Installation"];

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  console.log("tree", tree);

  const pathname = usePathname();

  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarHeader>
        <div className="flex items-center gap-x-4">
          <svg
            className="size-8"
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="42" cy="42" r="42" fill="black" />
            <path
              d="M60.0895 26L55.3658 53.4595H54.5338L47.5557 26H37.33L30.2445 53.5389H29.3857L23.9105 26H15L22.4076 59.7882C22.4344 59.9206 22.5417 60 22.6759 60H35.5318C35.8002 60 36.0149 59.8146 36.0686 59.5763L41.6511 36.3271H42.4026L47.7972 59.5498C47.8509 59.8146 48.0924 60 48.3877 60H61.163C61.3509 60 61.4851 59.8676 61.5388 59.7087L69 26H60.0895Z"
              fill="#E86824"
            />
            <path
              d="M75 26C72.7925 26 71 27.7925 71 30C71 32.2075 72.7925 34 75 34C77.2075 34 79 32.2075 79 30C79 27.7925 77.2075 26 75 26ZM71.6038 30C71.6038 28.1321 73.1321 26.6038 75 26.6038C75.6981 26.6038 76.3208 26.8679 76.8491 27.2264L76.2453 27.9623C76 27.8302 75.7359 27.6981 75.3962 27.6981H73.5472V31.3019L72.6415 32.4151C72.0189 31.8113 71.6038 30.9623 71.6038 30ZM76.3774 29C76.3774 29.2453 76.283 29.434 76.1132 29.5849C75.9434 29.7358 75.6981 29.8113 75.3962 29.8113H75.2642L76.2076 28.6415C76.283 28.7358 76.3774 28.8491 76.3774 29ZM74.1132 29.8113V28.1887H75.4151C75.6415 28.1887 75.8113 28.2642 75.9623 28.3585L74.7925 29.8113H74.1132ZM74.3962 30.283L74.1132 30.6415V30.283H74.3962ZM75 33.3962C74.2264 33.3962 73.5472 33.0943 72.9623 32.6415L73.5472 31.9057V31.9245H74.0943V31.2264L74.8679 30.2642H74.8868L76.3585 31.9245H77.0377L75.5094 30.2453H75.5849C75.9811 30.2264 76.3019 30.0943 76.566 29.8679C76.8113 29.6415 76.9434 29.3396 76.9434 28.9811C76.9434 28.6415 76.7925 28.3962 76.5849 28.1887L77.1887 27.434C77.9245 28.0566 78.3962 28.9434 78.3962 29.9811C78.3962 31.8679 76.8679 33.3962 75 33.3962Z"
              fill="#E86824"
            />
          </svg>
          <div className="py-4 text-lg font-semibold">Wandry UI</div>
        </div>
      </SidebarHeader>
      <SidebarContent className="no-scrollbar overflow-x-hidden px-2 pb-12">
        <div className="h-(--top-spacing) shrink-0" />
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            Sections
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {TOP_LEVEL_SECTIONS.map(({ name, href }) => (
                <SidebarMenuItem key={name}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      href === "/docs"
                        ? pathname === href
                        : pathname.startsWith(href)
                    }
                    className="data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                  >
                    <Link href={href}>
                      <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                      {name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {tree.children
          .filter((i) => i.type === "folder")
          .map((item) => {
            return (
              <SidebarGroup key={item.$id}>
                <SidebarGroupLabel className="text-muted-foreground font-medium">
                  {item.name}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  {item.type === "folder" && (
                    <SidebarMenu className="gap-0.5">
                      {item.children.map((item) => {
                        return (
                          item.type === "page" && (
                            <SidebarMenuItem key={item.url}>
                              <SidebarMenuButton
                                asChild
                                isActive={item.url === pathname}
                                className="data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                              >
                                <Link href={item.url}>
                                  <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                                  {item.name}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          )
                        );
                      })}
                    </SidebarMenu>
                  )}
                </SidebarGroupContent>
              </SidebarGroup>
            );
          })}
      </SidebarContent>
    </Sidebar>
  );
}
