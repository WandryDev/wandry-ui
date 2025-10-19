import "./styles/globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider enableSystem={false}>
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
