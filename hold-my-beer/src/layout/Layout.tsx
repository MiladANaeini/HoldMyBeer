import TopNav from "./TopNav";
import { AppRoutes } from "../Routes";
import { ScrollToTop } from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <TopNav />
      <main className="w-full flex items-center justify-center p-5">
        <AppRoutes />
      </main>
      <ScrollToTop />
    </>
  );
};

export default Layout;
