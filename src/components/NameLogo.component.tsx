import { useRef, useState } from "react"
import styles from "../styles/NameLogo.module.css"
import { useSpring, animated } from "react-spring"

function NameLogo({ pageName }: { pageName: string }) {
  const [title, setTitle] = useState(
    <p>
      <span style={{ fontWeight: 700 }}>DINIL</span>FERNANDO
    </p>
  )
  const [titleStatus, setTitleStatus] = useState<"name" | "page">("name")
  const background = useRef<HTMLDivElement>(null)

  const backroundSpring = useSpring({
    from: { width: "0%" },
    to: async (next) => {
      await next({ width: "100%" })
      await new Promise((resolve) => setTimeout(resolve, 6000))

      if (!background.current) return

      // align the black background to the right
      background.current.style.left = "auto"
      background.current.style.right = "0"

      await next({ width: "0%" })

      // align the black background to the left
      background.current.style.left = "0"
      background.current.style.right = "auto"

      if (titleStatus === "name") {
        setTitle(<p>{pageName.toUpperCase()}</p>)
        setTitleStatus("page")
      } else {
        setTitle(
          <p>
            <span style={{ fontWeight: 700 }}>DINIL</span>FERNANDO
          </p>
        )
        setTitleStatus("name")
      }
    },
    config: {
      mass: 1,
      friction: 10,
      tension: 30,
    },
    loop: true,
    delay: 500,
  })

  return (
    <div className={styles.base}>
      <div className={styles.title}>
        {title}

        <animated.div
          className={styles.background}
          ref={background}
          style={{ ...backroundSpring }}
        />
      </div>
    </div>
  )
}

export default NameLogo
