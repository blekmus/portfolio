import BottomHalf from "../components/HomePage/BottomHalf.component"
import TopHalf from "../components/HomePage/TopHalf.component"
import TopBar from "../components/TopBar.component"
import styles from "../styles/HomePage.module.css"

function HomePage() {
  return (
    <div className={styles.base}>
      <TopBar pageName="home" />
      <TopHalf />
      <BottomHalf />
    </div>
  )
}

export default HomePage
