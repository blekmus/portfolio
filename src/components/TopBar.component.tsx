import styles from "../styles/TopBar.module.css"
import NameLogo from "./NameLogo.component"

function TopBar({ pageName }: { pageName: string }) {
  return (
    <div className={styles.base}>
      <NameLogo pageName={pageName} />
    </div>
  )
}

export default TopBar
