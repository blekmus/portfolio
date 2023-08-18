import { useLayoutEffect, useRef, useState } from "react"
import styles from "../../styles/AboutPage/Contact.module.css"
import { useScroll, useSpring, animated } from "react-spring"

function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [startAnimated, setStartAnimated] = useState(false)

  useLayoutEffect(() => {
    // if the page is already scrolled sest the startAnimated to true
    if (window.scrollY > 0) {
      setStartAnimated(true);
    }
  }, [setStartAnimated]);

  console.log(startAnimated)

  const [scrollProps, setScrollProps] = useSpring(() => ({
    transform: "translateX(-30px) rotate(-5deg)", // Initial position
    // config: { tension: 120, friction: 14 }, // Adjust animation settings
    // immediate: true,
  }));


  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      // console.log(scrollYProgress)
      // if (scrollYProgress > 0.5) {
      //   // translate the container to the left
      //   if (containerRef.current) {
      //     containerRef.current.style.transform = `rotate(-5deg) translateX(${
      //       -100 * scrollYProgress * 3
      //     }px)`
      //   }
      // }
      setScrollProps({
        transform: `translateX(${-100 * scrollYProgress * 5}px) rotate(-5deg)`,
        // immediate: true,
      });
    },
  })


  return (
    <div className={styles.base} id="contact">
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <animated.h1 ref={containerRef} style={scrollProps}>
            HI@DINIL.DEV
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="var(--blue-accent)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.4318 0.227254L22.6077 10.5726C23.3271 16.9018 28.7428 21.6062 35.0232 21.3574L45.5882 20.9388L35.0831 22.1379C28.8384 22.8507 24.2043 28.3267 24.4595 34.6916L24.8767 45.0952L23.7008 34.7499C22.9814 28.4206 17.5656 23.7162 11.2853 23.9651L0.720255 24.3837L11.2253 23.1846C17.4701 22.4717 22.1042 16.9957 21.8489 10.6308L21.4318 0.227254Z" />
              <path d="M32.73 2.38308L28.645 11.9276C26.1459 17.7669 28.5204 24.5803 34.0885 27.5471L43.4555 32.5381L33.7554 28.2526C27.9892 25.7052 21.2693 28.0939 18.35 33.7289L13.5785 42.9393L17.6634 33.3948C20.1626 27.5555 17.7881 20.7422 12.2199 17.7753L2.85297 12.7843L12.5531 17.0698C18.3193 19.6173 25.0392 17.2285 27.9584 11.5936L32.73 2.38308Z" />
              <path d="M41.4623 9.97244L33.2111 16.1587C28.163 19.9435 26.8601 27.0401 30.2241 32.4277L35.8831 41.4909L29.5871 32.8692C25.8444 27.744 18.8393 26.4055 13.5278 29.8006L4.84611 35.35L13.0973 29.1637C18.1454 25.379 19.4484 18.2823 16.0844 12.8947L10.4254 3.83152L16.7214 12.4533C20.464 17.5784 27.4692 18.917 32.7806 15.5219L41.4623 9.97244Z" />
            </svg>
            HI@DINIL.DEV
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="var(--blue-accent)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.4318 0.227254L22.6077 10.5726C23.3271 16.9018 28.7428 21.6062 35.0232 21.3574L45.5882 20.9388L35.0831 22.1379C28.8384 22.8507 24.2043 28.3267 24.4595 34.6916L24.8767 45.0952L23.7008 34.7499C22.9814 28.4206 17.5656 23.7162 11.2853 23.9651L0.720255 24.3837L11.2253 23.1846C17.4701 22.4717 22.1042 16.9957 21.8489 10.6308L21.4318 0.227254Z" />
              <path d="M32.73 2.38308L28.645 11.9276C26.1459 17.7669 28.5204 24.5803 34.0885 27.5471L43.4555 32.5381L33.7554 28.2526C27.9892 25.7052 21.2693 28.0939 18.35 33.7289L13.5785 42.9393L17.6634 33.3948C20.1626 27.5555 17.7881 20.7422 12.2199 17.7753L2.85297 12.7843L12.5531 17.0698C18.3193 19.6173 25.0392 17.2285 27.9584 11.5936L32.73 2.38308Z" />
              <path d="M41.4623 9.97244L33.2111 16.1587C28.163 19.9435 26.8601 27.0401 30.2241 32.4277L35.8831 41.4909L29.5871 32.8692C25.8444 27.744 18.8393 26.4055 13.5278 29.8006L4.84611 35.35L13.0973 29.1637C18.1454 25.379 19.4484 18.2823 16.0844 12.8947L10.4254 3.83152L16.7214 12.4533C20.464 17.5784 27.4692 18.917 32.7806 15.5219L41.4623 9.97244Z" />
            </svg>
            HI@DINIL.DEV
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="var(--blue-accent)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.4318 0.227254L22.6077 10.5726C23.3271 16.9018 28.7428 21.6062 35.0232 21.3574L45.5882 20.9388L35.0831 22.1379C28.8384 22.8507 24.2043 28.3267 24.4595 34.6916L24.8767 45.0952L23.7008 34.7499C22.9814 28.4206 17.5656 23.7162 11.2853 23.9651L0.720255 24.3837L11.2253 23.1846C17.4701 22.4717 22.1042 16.9957 21.8489 10.6308L21.4318 0.227254Z" />
              <path d="M32.73 2.38308L28.645 11.9276C26.1459 17.7669 28.5204 24.5803 34.0885 27.5471L43.4555 32.5381L33.7554 28.2526C27.9892 25.7052 21.2693 28.0939 18.35 33.7289L13.5785 42.9393L17.6634 33.3948C20.1626 27.5555 17.7881 20.7422 12.2199 17.7753L2.85297 12.7843L12.5531 17.0698C18.3193 19.6173 25.0392 17.2285 27.9584 11.5936L32.73 2.38308Z" />
              <path d="M41.4623 9.97244L33.2111 16.1587C28.163 19.9435 26.8601 27.0401 30.2241 32.4277L35.8831 41.4909L29.5871 32.8692C25.8444 27.744 18.8393 26.4055 13.5278 29.8006L4.84611 35.35L13.0973 29.1637C18.1454 25.379 19.4484 18.2823 16.0844 12.8947L10.4254 3.83152L16.7214 12.4533C20.464 17.5784 27.4692 18.917 32.7806 15.5219L41.4623 9.97244Z" />
            </svg>
            HI@DINIL.DEV
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="var(--blue-accent)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.4318 0.227254L22.6077 10.5726C23.3271 16.9018 28.7428 21.6062 35.0232 21.3574L45.5882 20.9388L35.0831 22.1379C28.8384 22.8507 24.2043 28.3267 24.4595 34.6916L24.8767 45.0952L23.7008 34.7499C22.9814 28.4206 17.5656 23.7162 11.2853 23.9651L0.720255 24.3837L11.2253 23.1846C17.4701 22.4717 22.1042 16.9957 21.8489 10.6308L21.4318 0.227254Z" />
              <path d="M32.73 2.38308L28.645 11.9276C26.1459 17.7669 28.5204 24.5803 34.0885 27.5471L43.4555 32.5381L33.7554 28.2526C27.9892 25.7052 21.2693 28.0939 18.35 33.7289L13.5785 42.9393L17.6634 33.3948C20.1626 27.5555 17.7881 20.7422 12.2199 17.7753L2.85297 12.7843L12.5531 17.0698C18.3193 19.6173 25.0392 17.2285 27.9584 11.5936L32.73 2.38308Z" />
              <path d="M41.4623 9.97244L33.2111 16.1587C28.163 19.9435 26.8601 27.0401 30.2241 32.4277L35.8831 41.4909L29.5871 32.8692C25.8444 27.744 18.8393 26.4055 13.5278 29.8006L4.84611 35.35L13.0973 29.1637C18.1454 25.379 19.4484 18.2823 16.0844 12.8947L10.4254 3.83152L16.7214 12.4533C20.464 17.5784 27.4692 18.917 32.7806 15.5219L41.4623 9.97244Z" />
            </svg>
            HI@DINIL.DEV
          </animated.h1>
        </div>
      </div>
      <div className={styles.content}>
        <p>
          <span className={styles.content_title}>
            Have an idea?
            <br />
            Lets build it together
          </span>
          <br />
          <br />
          Get in touch to discuss your project, to tell me something cool, or
          just to say hello.
          <br />
          <br />
          <a href="mailto:hi@dinil.dev">
            hi@dinil.dev{" "}
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
        </p>
      </div>
    </div>
  );
}

export default Contact
