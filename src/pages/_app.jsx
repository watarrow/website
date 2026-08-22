import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

import Layout from "@/components/Layout";

// ===== STYLES =====
import "@/styles/globals.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  // allowed routes
  const router = useRouter();
  const routes = ["/", "/team", "/sponsor", "/blog", "/contact", "/join"];

  if (!routes.find((route) => router.pathname.startsWith(route)).length)
    return (
      <ThemeProvider>
        {/* <NextNProgress {...nextNProgressProps} /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    );

  return (
    <ThemeProvider defaultTheme="dark" enableSystem={false}>
      <Layout>
        {/* <NextNProgress {...nextNProgressProps} /> */}
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
