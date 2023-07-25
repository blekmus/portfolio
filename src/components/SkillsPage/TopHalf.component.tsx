import HeaderTitle from "../HeaderTitle.component"
import styles from "../../styles/SkillsPage/TopHalf.module.css"
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
        mainTitle={<>The skills that</>}
        secondaryTitle={
          <>
            make the <span style={{ color: "var(--pink-accent)" }}>magic</span>{" "}
            happen.
          </>
        }
      >
        <div className={styles.tag_list}>
          <div className={styles.tag_list_item}>
            <p
              style={{ color: "var(--blue-accent)", filter: "brightness(90%)" }}
            >
              Elementary
            </p>
            <div className={styles.tag_item_circles}>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.5" cy="5" r="4.5" />
              </svg>
            </div>
          </div>

          <div className={styles.tag_list_item}>
            <p
              style={{
                color: "var(--purple-accent)",
                filter: "brightness(90%)",
              }}
            >
              Intermediate
            </p>
            <div className={styles.tag_item_circles}>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.5" cy="5" r="4.5" />
              </svg>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.5" cy="5" r="4.5" />
              </svg>
            </div>
          </div>

          <div className={styles.tag_list_item}>
            <p
              style={{ color: "var(--pink-accent)", filter: "brightness(90%)" }}
            >
              Fluent
            </p>
            <div className={styles.tag_item_circles}>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.5" cy="5" r="4.5" />
              </svg>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.5" cy="5" r="4.5" />
              </svg>
              <svg
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.5" cy="5" r="4.5" />
              </svg>
            </div>
          </div>
        </div>
      </HeaderTitle>
    </animated.div>
  )
}

export default TopHalf
