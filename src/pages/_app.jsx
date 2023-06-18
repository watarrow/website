import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

import Layout from "@/components/Layout";

// ===== STYLES =====
import "@/styles/globals.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  // allowed routes
  const router = useRouter();
  const routes = ["/"];

  if (!routes.includes(router.pathname))
    return (
      <ThemeProvider>
        {/* <NextNProgress {...nextNProgressProps} /> */}
        <Component {...pageProps} />
        {/* <Analytics /> */}
      </ThemeProvider>
    );

  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        {/* <NextNProgress {...nextNProgressProps} /> */}
        <Component {...pageProps} />
        {/* <Analytics /> */}
      </Layout>
    </ThemeProvider>
  );
}
