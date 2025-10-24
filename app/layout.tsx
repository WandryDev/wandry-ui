import "./styles/globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "next-themes";
import { SiteHeader } from "@/components/site-nav";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(inter.className)} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider enableSystem={false}>
          <SiteHeader />
          <RootProvider>
            <main className="flex flex-1 flex-col">{children}</main>
          </RootProvider>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
