import Link from "next/link";

import { GitHubLink } from "@/components/github-link";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";

const links = [
  {
    href: "/docs/installation",
    label: "Docs",
  },
  {
    href: "/docs/components",
    label: "Components",
  },
];

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full py-2">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center gap-30 **:data-[slot=separator]:!h-4">
          <Link href="/">
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
          </Link>
          <MainNav items={links} className="hidden lg:flex" />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <Button asChild>
                <Link href="/docs">Getting started</Link>
              </Button>
            </div>

            <GitHubLink />
          </div>
        </div>
      </div>
    </header>
  );
}
