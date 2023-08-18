import styles from "../../styles/ProjectsPage/Content.module.css";
import { useSpring, animated, config } from "react-spring";

function Content() {
  const data = [
    {
      title: "The Lonely Lands",
      subTitle: "Personal Blog",
      github: "https://github.com/blekmus/next-thelonelylands",
      link: "https://thelonelylands.com",
    },
    {
      title: "Archive",
      subTitle: "Unix and Tech knowledge base",
      github: "https://github.com/blekmus/archive",
      link: "https://archive.thelonelylands.com"
    },
    {
      title: "abridged-cli",
      subTitle: "Command line media archiver",
      github: "https://github.com/blekmus/abridged-cli",
    }
  ];

  const contentSpring = useSpring({
    from: { y: "10px", opacity: 0 },
    to: async (next) => {
      await next({ y: "0", opacity: 1 });
    },
    delay: 1800,
    config: config.slow,
  });

  // loop through the data to create the cards
  return (
    <animated.div className={styles.base} style={contentSpring}>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.card}>
            <div className={styles.card_text}>
              <h4>
                <pre>{item.title}</pre>
              </h4>
              <h4>•</h4>
              <p style={{ color: "var(--tertiary-text)" }}>
                <i>{item.subTitle}</i>
              </p>
            </div>
            <div className={styles.card_links}>
              {item.link && (
                <a href={item.link} target="_blank">
                  Visit {" "}
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
              )}
              {item.github && (
                <a href={item.github} target="_blank">
                  About {" "}
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
              )}
            </div>
          </div>
        );
      })}
    </animated.div>
  );
}

export default Content;
