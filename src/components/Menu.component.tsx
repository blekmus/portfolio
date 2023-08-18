import { useEffect, useState } from "react";
import styles from "../styles/Menu.module.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Menu({
  menuState,
  setMenuState,
  color,
}: {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
}) {
  const [toggle, setToggle] = useState(false);

  // usespring fade in menu if toggle is true
  const menuSpring = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "translateY(0px)" : "translateY(-10px)",
    config: {
      tension: 200,
      friction: 20,
    },
  });

  const overlayFade = useSpring({
    opacity: toggle ? 1 : 0,
    config: {
      tension: 200,
      friction: 20,
    },
  });

  useEffect(() => {
    if (menuState) {
      setToggle(true);
    }
  }, [menuState]);

  const handleToggle = () => {
    setToggle(false);

    setTimeout(() => {
      setMenuState(!menuState);
    }, 200);
  };

  return (
    <>
      {menuState ? (
        <div>
          <animated.div className={styles.base} style={menuSpring}>
            <div className={styles.nav_header}>
              <div className={styles.nav_title}>
                <p>
                  <span style={{ fontWeight: 700 }}>DINIL</span>FERNANDO
                </p>
              </div>
              <h1
                className={styles.nav_greeting}
                style={{ color: color }}
              >
                Hi!
              </h1>
              <div className={styles.toggle_cont}>
                <button
                  className={styles.toggle}
                  onClick={() => handleToggle()}
                >
                  <div className={styles.middle_line} style={{backgroundColor: color}} />
                </button>
              </div>
            </div>
            <div className={styles.nav_items}>
              <Link className={styles.nav_item} to="/">
                <div className={styles.nav_item_img}>
                  <img src="/statue.gif" alt="home img" />
                </div>
                <p>Home</p>
              </Link>
              <Link className={styles.nav_item} to="/projects">
                <div className={styles.nav_item_img}>
                  <img src="/diamond.gif" alt="projects img" />
                </div>
                <p>Projects</p>
              </Link>
              <Link className={styles.nav_item} to="/skills">
                <div className={styles.nav_item_img}>
                  <img src="/gameboy.gif" alt="skills img" />
                </div>
                <p>Skills</p>
              </Link>
              <Link className={styles.nav_item} to="/about">
                <div className={styles.nav_item_img}>
                  <img
                    src="/snowglobe.gif"
                    alt="about img"
                    className={styles.snowglobe}
                  />
                </div>
                <p>About</p>
              </Link>
            </div>
          </animated.div>
          <animated.div
            className={styles.overlay}
            onClick={() => handleToggle()}
            style={overlayFade}
          />
        </div>
      ) : null}
    </>
  );
}

export default Menu;
