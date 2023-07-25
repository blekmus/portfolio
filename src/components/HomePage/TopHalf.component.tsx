import HeaderTitle from "../HeaderTitle.component"
import styles from "../../styles/HomePage/TopHalf.module.css"
import { useSpring, animated, config } from "react-spring"
import { Link } from "react-router-dom"

function TopHalf() {
  const ipadSpring = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      await next({ opacity: 1 })
    },
    delay: 1900,
    config: config.slow,
  })

  const titleSpring = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      await next({ opacity: 1 })
    },
    delay: 1900,
    config: config.slow,
  })

  return (
    <div className={styles.base}>
      <animated.div className={styles.left} style={titleSpring}>
        <HeaderTitle
          mainTitle={
            <>
              Helping translate{" "}
              <span style={{ color: "var(--purple-accent)" }}>ideas</span>
            </>
          }
          secondaryTitle={<>into web wizardry.</>}
        >
          <div className={styles.buttons}>
            <Link className={styles.work_button} to="/about#contact">
              Available for Work
              <svg
                className={styles.work_button_icon}
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M2.75 8.37499C2.23125 8.37499 1.7625 8.58749 1.425 8.92499C0.6875 9.66249 0.25 12.75 0.25 12.75C0.25 12.75 3.3375 12.3125 4.075 11.575C4.33812 11.3132 4.51752 10.9792 4.59042 10.6153C4.66332 10.2514 4.62644 9.87404 4.48446 9.53113C4.34247 9.18823 4.10179 8.89525 3.79298 8.6894C3.48416 8.48355 3.12114 8.37412 2.75 8.37499ZM3.19375 10.6937C3.01875 10.8687 1.8375 11.1687 1.8375 11.1687C1.8375 11.1687 2.13125 9.99374 2.3125 9.81249C2.41875 9.69374 2.575 9.62499 2.75 9.62499C2.87374 9.62517 2.99466 9.66196 3.09752 9.73074C3.20039 9.79952 3.2806 9.8972 3.32805 10.0115C3.3755 10.1258 3.38807 10.2515 3.36417 10.3729C3.34027 10.4943 3.28097 10.606 3.19375 10.6937ZM9.8875 7.53124C13.8625 3.55624 12.5375 0.462488 12.5375 0.462488C12.5375 0.462488 9.44375 -0.862512 5.46875 3.11249L3.9125 2.79999C3.7102 2.76115 3.50148 2.77215 3.30439 2.83204C3.10729 2.89193 2.92774 2.99891 2.78125 3.14374L0.25 5.68124L3.375 7.01874L5.98125 9.62499L7.31875 12.75L9.85 10.2187C10.1438 9.92499 10.275 9.49999 10.1938 9.08749L9.8875 7.53124ZM3.63125 5.76874L2.4375 5.25624L3.66875 4.02499L4.56875 4.20624C4.2125 4.72499 3.89375 5.26874 3.63125 5.76874ZM7.74375 10.5625L7.23125 9.36874C7.73125 9.10624 8.275 8.78749 8.7875 8.43124L8.96875 9.33124L7.74375 10.5625ZM9 6.64999C8.175 7.47499 6.8875 8.14999 6.475 8.35624L4.64375 6.52499C4.84375 6.11874 5.51875 4.83124 6.35 3.99999C9.275 1.07499 11.4938 1.50624 11.4938 1.50624C11.4938 1.50624 11.925 3.72499 9 6.64999ZM8.375 5.87499C9.0625 5.87499 9.625 5.31249 9.625 4.62499C9.625 3.93749 9.0625 3.37499 8.375 3.37499C7.6875 3.37499 7.125 3.93749 7.125 4.62499C7.125 5.31249 7.6875 5.87499 8.375 5.87499Z"
                />
              </svg>
            </Link>

            <Link className={styles.projects_button} to="/projects">
              Things I've Made
            </Link>
          </div>
        </HeaderTitle>
      </animated.div>
      <animated.div className={styles.right} style={{ ...ipadSpring }}>
        <img
          className={styles.ipad_img}
          src="https://i.imgur.com/H267rVT_d.webp?maxwidth=760&fidelity=grand"
          alt=""
        />
      </animated.div>
    </div>
  )
}

export default TopHalf
