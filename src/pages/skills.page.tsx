import { useState } from "react";
import Footer from "../components/Footer.component";
import Content from "../components/SkillsPage/Content.component";
import TopHalf from "../components/SkillsPage/TopHalf.component";
import TopBar from "../components/TopBar.component";
import styles from "../styles/PageBase.module.css";
import Menu from "../components/Menu.component";
import useEcoMode from "../hooks/useEcoMode";
import EnergySaving from "../components/EnergySaving.component";

function SkillsPage() {
  const [menuState, setMenuState] = useState(false);
  const [ecoMode, setEcoMode] = useEcoMode();

  return (
    <div
      className={styles.base}
      style={{
        height: ecoMode || menuState ? "100vh" : "initial",
        overflow: ecoMode || menuState ? "hidden" : "initial",
      }}
    >
      {ecoMode ? <EnergySaving setEcoMode={setEcoMode} /> : null}

      <Menu
        menuState={menuState}
        setMenuState={setMenuState}
        color="var(--pink-accent)"
      />
      <TopBar
        pageName="Skills"
        color="var(--pink-accent)"
        setMenuState={setMenuState}
      />
      <TopHalf />
      <Content />
      <Footer />
    </div>
  );
}

export default SkillsPage;
