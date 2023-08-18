import styles from "../styles/Footer.module.css";
import { useSpring, animated, config } from "react-spring";

function Footer() {
  const circleFirstSpring = useSpring({
    from: { scale: 0, opacity: '20%' },
    to: async (next) => {
      const prom = next({ opacity: '0%', delay: 800 })
      await next({ scale: 2.2 })

      await prom

      // timeout
      await new Promise(resolve => setTimeout(resolve, 1000))
    },
    config: config.slow,
    loop: true,
  });

  const circleSecondSpring = useSpring({
    from: { scale: 0, opacity: "20%" },
    to: async (next) => {
      // timeout
      await new Promise((resolve) => setTimeout(resolve, 500));

      const prom = next({ opacity: "0%", delay: 800 });
      await next({ scale: 2.2 });

      await prom

      // timeout
      await new Promise((resolve) => setTimeout(resolve, 500));
    },
    config: config.slow,
    loop: true,
  });


  return (
    <div className={styles.base}>
      <h1 className={styles.title}>Dinil Fernando • 2023</h1>
      <p className={styles.text}>
        Designed with passion and automatically deployed to AWS Amplify using Github Actions
      </p>
      <div className={styles.build}>
        <p>Build version</p>
        <div className={styles.build_tag}>
          <div className={styles.circle}>
            <div className={styles.inner_circle} />
            <animated.div
              className={styles.outer_circle_first}
              style={circleFirstSpring}
            />
            <animated.div
              className={styles.outer_circle_second}
              style={circleSecondSpring}
            />
          </div>
          <pre>v23.06.26-live</pre>
        </div>
      </div>
    </div>
  );
}

export default Footer;
