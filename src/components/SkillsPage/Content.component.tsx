import styles from "../../styles/SkillsPage/Content.module.css"
import { useSpring, animated, config } from "react-spring"

function Content() {
  const data = [
    {
      title: "Languages",
      items: [
        {
          title: "HTML",
          level: 3,
        },
        {
          title: "CSS",
          level: 3,
        },
        {
          title: "JavaScript",
          level: 3,
        },
        {
          title: "TypeScript",
          level: 3,
        },
        {
          title: "Python",
          level: 3,
        },
        {
          title: "PHP",
          level: 3,
        },
        {
          title: "Bash",
          level: 2,
        },
        {
          title: "Go",
          level: 2,
        },
      ],
    },
    {
      title: "Frameworks",
      items: [
        {
          title: "Next",
          level: 3,
        },
        {
          title: "Laravel",
          level: 3,
        },
        {
          title: "Express",
          level: 3,
        },
        {
          title: "Flask",
          level: 3,
        },
        {
          title: "Electron",
          level: 2,
        },
        {
          title: "Gin",
          level: 2,
        },
      ],
    },
    {
      title: "Front-end & Back-end",
      items: [
        {
          title: "React",
          level: 3,
        },
        {
          title: "Node",
          level: 3,
        },
        {
          title: "MongoDB",
          level: 3,
        },
        {
          title: "Tailwind",
          level: 2,
        },
        {
          title: "MySQL",
          level: 2,
        },
        {
          title: "Redis",
          level: 2,
        },
        {
          title: "Vue",
          level: 1,
        },
      ],
    },
    {
      title: "Tooling",
      items: [
        {
          title: "Git",
          level: 3,
        },
        {
          title: "AWS",
          level: 3,
        },
        {
          title: "Figma",
          level: 3,
        },
        {
          title: "Docker",
          level: 2,
        },
        {
          title: "Github Actions",
          level: 2,
        },
      ],
    },
    {
      title: "Systems",
      items: [
        {
          title: "Linux",
          level: 3,
        },
        {
          title: "Windows",
          level: 3,
        },
        {
          title: "MacOS",
          level: 2,
        },
      ],
    },
  ]

  const contentSpring = useSpring({
    from: { y: "10px", opacity: 0 },
    to: async (next) => {
      await next({ y: "0", opacity: 1 })
    },
    delay: 1800,
    config: config.slow,
  })

  // loop through the data to create the cards
  return (
    <animated.div className={styles.base} style={contentSpring}>
      {data.map((card) => (
        <div className={styles.card} key={card.title}>
          <p className={styles.card_title}>{card.title}</p>
          <div className={styles.card_items}>
            {card.items.map((item) => (
              <div className={styles.card_item} key={item.title}>
                <p>{item.title}</p>
                <div className={styles.tag_item_circles}>
                  {[...Array(item.level)].map(() => (
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      key={Math.random()}
                    >
                      <circle cx="4.5" cy="5" r="4.5" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </animated.div>
  )
}

export default Content
