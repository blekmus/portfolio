import styles from "../../styles/AboutPage/Content.module.css"
import { useSpring, animated, config } from "react-spring"

function Content() {
  const contentSpring = useSpring({
    from: { y: "10px", opacity: 0 },
    to: async (next) => {
      await next({ y: "0", opacity: 1 })
    },
    delay: 1800,
    config: config.slow,
  })

  return (
    <animated.div className={styles.base} style={contentSpring}>
      <div className={styles.left}>
        <p>
          <span style={{ color: "var(--tertiary-text)" }}>TL;DR</span>
          <br />
          <br />
          I'm a <b>full-stack developer</b> based in <b>Canada</b> with a
          passion for making effective and functional applications without{" "}
          <s>looking like shit</s> sacrificing the user experience. <br />
          <br />
          I specialize in end-to-end website implementation, taking charge of
          the entire process from start to completion. From the initial mockup
          designs to the coding and optimization. I ensure every website I work
          on is a treat for the eyes and easy to use while delivering flawless
          performance across all devices. <br />
          <br />
          <i>All you need to bring is a vision; the rest is on me.</i>
        </p>
        <p>
          <span style={{ color: "var(--tertiary-text)" }}>
            What can I help you with?
          </span>
          <br />
          <br />
          Front-end Development <br />
          Back-end Development <br />
          Cloud Computing <br />
          UI/UX Design
        </p>
        <p>
          <span style={{ color: "var(--tertiary-text)" }}>Academic</span>
          <br />
          <br />
          AWS Certified Solutions Architect (reading) <br />
          City & Guilds UK Certified International Trainer
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          <p className={styles.card_title}>Specifics</p>
          <div className={styles.card_items}>
            <p>He/Him</p>
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.card_title}>Socials</p>
          <div className={styles.card_items}>
            <a href="https://github.com/blekmus" target="_blank">
              Github (blekmus){" "}
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11.3332L11.3332 1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H11.3332V11.3332"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="https://www.hackerrank.com/h200559428" target="_blank">
              HackerRank{" "}
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11.3332L11.3332 1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H11.3332V11.3332"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {/* <a href="https://www.threads.net/@dinil.fdo" target="_blank">
              Threads (@dinil.fdo){" "}
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11.3332L11.3332 1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H11.3332V11.3332"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a> */}
          </div>
        </div>
        <div className={styles.card}>
          <p className={styles.card_title}>Contact</p>
          <div className={styles.card_items}>
            <a href="mailto:hi@dinil.dev" target="_blank">
              Email (hi@dinil.dev){" "}
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11.3332L11.3332 1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H11.3332V11.3332"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Content
