import styles from "../styles/HeaderTitle.module.css"

function HeaderTitle({
  mainTitle,
  secondaryTitle,
  children,
}: {
  mainTitle: React.ReactNode
  secondaryTitle: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div>
      <h1 className={styles.title}>
        {mainTitle}
        <br />
        <span style={{ color: "var(--secondary-text)" }}>
          {secondaryTitle}
        </span>
      </h1>
      {children}
    </div>
  )
}

export default HeaderTitle
