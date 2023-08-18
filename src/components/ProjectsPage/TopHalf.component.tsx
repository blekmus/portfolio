import HeaderTitle from "../HeaderTitle.component";
import styles from "../../styles/ProjectsPage/TopHalf.module.css";
import { useSpring, animated, config } from "react-spring";

function TopHalf() {
  const titleSpring = useSpring({
    from: { y: "10px", opacity: 0 },
    to: async (next) => {
      await next({ y: "0", opacity: 1 });
    },
    delay: 1700,
    config: config.slow,
  });

  return (
    <animated.div className={styles.base} style={titleSpring}>
      <HeaderTitle
        mainTitle={<>Digital Experiences</>}
        secondaryTitle={
          <>
            with a unique <span style={{ color: "var(--orange-accent)" }}>story</span>{" "}
            to tell.
          </>
        }
      >
        <p style={{color: "var(--secondary-text)"}}>Case Studies</p>
      </HeaderTitle>
    </animated.div>
  );
}

export default TopHalf;
