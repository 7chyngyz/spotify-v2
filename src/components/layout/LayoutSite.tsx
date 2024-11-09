import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Playlists from "../shared/PlayList";
// import Review from "../pages/searchQuerySections/Review";

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <div className={scss.content}>
        <Playlists />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSite;
