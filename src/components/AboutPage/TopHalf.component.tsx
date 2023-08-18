import HeaderTitle from "../HeaderTitle.component"
import styles from "../../styles/AboutPage/TopHalf.module.css"
import { useSpring, animated, config } from "react-spring"

function TopHalf() {
  const titleSpring = useSpring({
    from: { y: "10px", opacity: 0 },
    to: async (next) => {
      await next({ y: "0", opacity: 1 })
    },
    delay: 1700,
    config: config.slow,
  })

  return (
    <animated.div className={styles.base} style={titleSpring}>
      <HeaderTitle
        mainTitle={<>Lets talk about </>}
        secondaryTitle={
          <>
            the <span style={{ color: "var(--blue-accent)" }}>elephant</span>{" "}
            in the room.
          </>
        }
      />
    </animated.div>
  )
}

export default TopHalf
