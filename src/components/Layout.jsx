import { useRouter } from "next/router";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="layout">
      <Navbar />
      <div className="container">{children}</div>
      {router.pathname === "/" || <Footer />}
    </div>
  );
};
export default Layout;
