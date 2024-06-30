import { Outlet } from "react-router-dom";
import { Header } from "src/widgets/Header";
import s from "./Layout.module.css";

export const Layout = () => {
  return (
    <div>
      <Header></Header>
      <main className={s.layout}>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
