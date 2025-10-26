import "./styles/globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "next-themes";
import { SiteHeader } from "@/components/site-nav";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(inter.className)} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Suspense>
          <ThemeProvider enableSystem={false}>
            <SiteHeader />
            <RootProvider>
              <main className="flex flex-1 flex-col">{children}</main>
            </RootProvider>
            <SiteFooter />
          </ThemeProvider>
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
