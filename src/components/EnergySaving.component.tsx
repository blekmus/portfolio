import styles from "../styles/EnergySaving.module.css";
import HeaderTitle from "./HeaderTitle.component";
import { useSpring, animated } from "react-spring";

function EnergySaving({
  setEcoMode,
}: {
  setEcoMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // imperative fade out animation
  const [fadeOut, setFadeOut] = useSpring(() => ({
    opacity: 1,
    config: {
      tension: 200,
      friction: 20,
    },
  }));

  const clickOutside = () => {
    setFadeOut({
      opacity: 0,
    });

    // timeout to allow fade out animation to finish
    setTimeout(() => {
      setEcoMode(false);
    }, 200);
  };

  return (
    <animated.div
      className={styles.base}
      onMouseDown={() => clickOutside()}
      style={fadeOut}
    >
      <div className={styles.title}>
        <h1>[ENERGY SAVING MODE]</h1>
      </div>
      <div className={styles.header}>
        <HeaderTitle
          mainTitle={<>The little things </>}
          secondaryTitle={<>make all the difference.</>}
        />
      </div>
      <div className={styles.content}>
        <p>
          <i>Power down when not in use.</i>
        </p>
        <p>
          Click or touch anywhere on this page to return to the previous page.
        </p>
      </div>
      <img src="/leaves.png" className={styles.leaves} alt="leaves" />
    </animated.div>
  );
}

export default EnergySaving;
