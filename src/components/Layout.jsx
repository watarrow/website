import { useRouter } from "next/router";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="layout">
      <Navbar />
      <div className="container">{children}</div>
      {/* /planes renders its own inline footer */}
      {router.pathname === "/planes" || <Footer />}
    </div>
  );
};
export default Layout;
