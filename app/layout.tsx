import "./styles/globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-nav";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import { Suspense } from "react";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(inter.className)} suppressHydrationWarning>
      <Head>
        <title>Wandry UI</title>
        <meta
          name="description"
          content="A set of open source fully controlled React Inertia form elements"
        />
        <meta property="og:title" content="Wandry UI" key="title" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Suspense>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
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
