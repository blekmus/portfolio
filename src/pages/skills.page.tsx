import Content from "../components/SkillsPage/Content.component"
import TopHalf from "../components/SkillsPage/TopHalf.component"
import TopBar from "../components/TopBar.component"
import styles from "../styles/PageBase.module.css"

function AboutPage() {
  return (
    <div className={styles.base}>
      <TopBar pageName="Skills" />
      <TopHalf />
      <Content />
    </div>
  )
}

export default AboutPage
