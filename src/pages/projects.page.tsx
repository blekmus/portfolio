import { useState } from "react";
import TopHalf from "../components/ProjectsPage/TopHalf.component";
import Footer from "../components/Footer.component";
import TopBar from "../components/TopBar.component";
import styles from "../styles/PageBase.module.css";
import Menu from "../components/Menu.component";
import useEcoMode from "../hooks/useEcoMode";
import EnergySaving from "../components/EnergySaving.component";
import Content from "../components/ProjectsPage/Content.component";

function ProjectsPage() {
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
        color="var(--orange-accent)"
      />
      <TopBar
        pageName="projects"
        color="var(--orange-accent)"
        setMenuState={setMenuState}
      />
      <TopHalf />
      <Content />
      <Footer />
    </div>
  );
}

export default ProjectsPage;
