import { useState } from "react";
import Contact from "../components/AboutPage/Contact.component";
import Content from "../components/AboutPage/Content.component";
import TopHalf from "../components/AboutPage/TopHalf.component";
import Footer from "../components/Footer.component";
import TopBar from "../components/TopBar.component";
import styles from "../styles/PageBase.module.css";
import Menu from "../components/Menu.component";
import useEcoMode from "../hooks/useEcoMode";
import EnergySaving from "../components/EnergySaving.component";

function AboutPage() {
  const [menuState, setMenuState] = useState(false);
  const [ecoMode, setEcoMode] = useEcoMode();

  return (
    <div
      className={styles.base}
      style={{
        overflow: menuState ? "hidden" : "initial",
        height: menuState ? "100vh" : "initial",
      }}
    >
      {ecoMode ? <EnergySaving setEcoMode={setEcoMode} /> : null}
      <Menu
        menuState={menuState}
        setMenuState={setMenuState}
        color="var(--green-accent)"
      />
      <TopBar
        pageName="about"
        color="var(--green-accent)"
        setMenuState={setMenuState}
      />
      <TopHalf />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default AboutPage;
