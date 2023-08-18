import styles from "../../styles/HomePage/BottomHalf.module.css"
import { useSpring, animated, config } from "react-spring"



function BottomHalf() {
  const contentSpring = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      await next({ opacity: 1 })
    },
    delay: 1900,
    config: config.slow,
  })

  const textboxSpring = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      await next({ opacity: 1 })
    },
    delay: 1900,
    config: config.slow,
  })

  const profeshSpring = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      await next({ opacity: 1 })
    },
    delay: 1900,
    config: config.slow,
  })


  return (
    <div className={styles.base}>
      <div className={styles.left}>
        <animated.h1 className={styles.left_profession} style={contentSpring}>
          Independant web
        </animated.h1>
        <animated.img
          src="https://i.imgur.com/RCmfq6w.png"
          className={styles.iphone_img}
          style={contentSpring}
          alt=""
        />
      </div>

      <div className={styles.right}>
        <animated.div className={styles.textbox} style={textboxSpring}>
          <p style={{ marginBottom: "15px" }}>
            <i>
              I build <s>websites</s> experiences
            </i>
          </p>
          <p>
            My expertise is designing and engineering digital interfaces
            that are as beautiful as they are functional.
          </p>
        </animated.div>

        <animated.h1 className={styles.right_profession} style={profeshSpring}>
          designer <span style={{ color: "var(--purple-accent)" }}>//</span>{" "}
          developer
        </animated.h1>
      </div>
    </div>
  )
}

export default BottomHalf
