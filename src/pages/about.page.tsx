import Contact from "../components/AboutPage/Contact.component"
import Content from "../components/AboutPage/Content.component"
import TopHalf from "../components/AboutPage/TopHalf.component"
import TopBar from "../components/TopBar.component"
import styles from "../styles/PageBase.module.css"

function AboutPage() {
  return (
    <div className={styles.base}>
      <TopBar pageName="about" />
      <TopHalf />
      <Content />
      <Contact />
    </div>
  )
}

export default AboutPage
