import { useState } from "react"
import BottomHalf from "../components/HomePage/BottomHalf.component"
import TopHalf from "../components/HomePage/TopHalf.component"
import Menu from "../components/Menu.component"
import TopBar from "../components/TopBar.component"
import styles from "../styles/HomePage.module.css"
import EnergySaving from "../components/EnergySaving.component"
import useEcoMode from "../hooks/useEcoMode"

function HomePage() {
  const [menuState, setMenuState] = useState(false);
  const [ecoMode, setEcoMode] = useEcoMode();

  return (
    <div className={styles.base}>
      {ecoMode ? <EnergySaving setEcoMode={setEcoMode} /> : null}
      <Menu
        menuState={menuState}
        setMenuState={setMenuState}
        color="var(--purple-accent)"
      />
      <TopBar
        pageName="home"
        color="var(--purple-accent)"
        setMenuState={setMenuState}
      />
      <TopHalf />
      <BottomHalf />
    </div>
  );
}

export default HomePage
