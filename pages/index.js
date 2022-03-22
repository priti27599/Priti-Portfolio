import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';

export default function Home() {
  return (
    <div className={styles.container1}>
      <div className={styles.contleft}>
        <div className={styles.left}>
          <Link href="https://github.com/priti27599/" passHref={true}>
            <a>
              <AiOutlineGithub className={styles.git} />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/priti-kumari-33b2021b4/"
            passHref={true}
          >
            <a>
              <AiOutlineLinkedin className={styles.din} />
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>Hi, I'm Priti</h1>
          <h3 className={styles.text}>Frontend Developer</h3>
          <p className={styles.para}>
            I love working on Frontend web projects. <br /> I have diverse set
            of skills, ranging from design,
            <br /> to HTML, CSS, React.js, Next.js
          </p>

          <Link href="/contact">
            <a className={styles.btn}>
              Contact Me <AiOutlineSend className={styles.send} />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.contright}>
        <img
          src="/img/capture10.jpg"
          alt="pet"
          width="410"
          height="410"
          className={styles.img}
        />
      </div>
    </div>
  );
}
