import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative z-40">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
