import styles from '../styles/Project.module.css';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const Project = () => {
  return (
    <div className={styles.project}>
      <h2 className={styles.h2ele}>Projects</h2>
      <div className={styles.subtitle}>Most recent work</div>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <img
              src="/img/p1.jpg"
              alt=""
              className={styles.img}
              width="300"
              height="200"
            />

            <div className={styles.detail}>
              <h3 className={styles.name}>Youtube-clone</h3>
              <div className={styles.para}>
                In this project i used React.js, Css and <br />
                Firebase. This website adaptable to all <br />
                devices with UI components.
              </div>
              <Link
                href="https://clone-12e9a.web.app/"
                className={styles.btn}
                passHref={true}
              >
                <a className={styles.demo}>
                  Demo <BsArrowRight className={styles.arrow} />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.content}>
            <img
              src="/img/p2.jpg"
              alt=""
              className={styles.img}
              width="300"
              height="200"
            />

            <div className={styles.detail}>
              <h3 className={styles.name}>Covid Tracker</h3>
              <div className={styles.para}>
                In this project i used React.js, Css and <br />
                Firebase. This website adaptable to all <br />
                devices with UI components.
              </div>
              <Link
                href="https://covid-19-tracker-702c5.web.app/"
                className={styles.btn}
                passHref={true}
              >
                <a className={styles.demo}>
                  Demo <BsArrowRight className={styles.arrow} />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.content}>
            <img
              src="/img/2.jpg"
              alt=""
              className={styles.img}
              width="310"
              height="300"
            />

            <div className={styles.detail}>
              <h3 className={styles.name}>Calculator</h3>
              <div className={styles.para}>
                In this project i used React.js, Css and <br />
                Firebase. This website adaptable to all <br />
                devices with UI components.
              </div>
              <Link
                href="https://calculator-feb7b.web.app/"
                className={styles.btn}
                passHref={true}
              >
                <a className={styles.demo}>
                  Demo <BsArrowRight className={styles.arrow} />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.content}>
            <img
              src="/img/p4.jpg"
              alt=""
              className={styles.img}
              width="300"
              height="200"
            />

            <div className={styles.detail}>
              <h3 className={styles.name}>Netflix-Clone</h3>
              <div className={styles.para}>
                In this project i used React.js, Css and <br />
                Firebase. This website adaptable to all <br />
                devices with UI components.
              </div>
              <Link
                href="https://netflix-clone-e0c3b.web.app/"
                className={styles.btn}
                passHref={true}
              >
                <a className={styles.demo}>
                  Demo <BsArrowRight className={styles.arrow} />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.content}>
            <img
              src="/img/p5.jpg"
              alt=""
              className={styles.img}
              width="300"
              height="200"
            />

            <div className={styles.detail}>
              <h3 className={styles.name}>Celebrity Engagement Platform</h3>
              <div className={styles.para}>
                In this project i used React.js, Css and <br />
                Firebase. This website adaptable to all <br />
                devices with UI components.
              </div>
              <Link
                href="https://celebrity-platform.web.app/"
                className={styles.btn}
                passHref={true}
              >
                <a className={styles.demo}>
                  Demo <BsArrowRight className={styles.arrow} />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.content}>
            <img
              src="/img/p6.jpg"
              alt=""
              className={styles.img}
              width="300"
              height="200"
            />

            <div className={styles.detail}>
              <h3 className={styles.name}>Google-clone</h3>
              <div className={styles.para}>
                In this project i used React.js, Css and <br />
                Firebase. This website adaptable to all <br />
                devices with UI components.
              </div>
              <Link
                href="https://clone-6213d.web.app/"
                passHref={true}
                className={styles.btn}
              >
                <a className={styles.demo}>
                  Demo <BsArrowRight className={styles.arrow} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
