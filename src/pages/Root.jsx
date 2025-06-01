import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Header logo="React DEMO app" />
      <main>
        <Outlet />
      </main>
      <Footer year={2025} />
    </>
  );
};

export default Root;
