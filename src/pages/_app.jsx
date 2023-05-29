import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

import Layout from "@/components/Layout";

// ===== STYLES =====
import "@/styles/globals.css";
// pages
// components
import "@/styles/components/Navbar.scss";
import "@/styles/components/Layout.scss";
import "@/styles/components/Footer.scss";
import "@/styles/components/MenuButton.scss";

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
