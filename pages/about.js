import styles from '../styles/About.module.css';
import Link from 'next/link';

const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.h1ele}>About Me</h1>
      <p className={styles.para1}>My introduction</p>
      <div className={styles.container2}>
        <div className={styles.aboutimg}>
          <img
            src="/img/pic1.jpg"
            alt="Priti"
            width="400px"
            height="400px"
            className={styles.img}
          />
        </div>
        <div className={styles.aboutdetail}>
          <p className={styles.para2}>
            Web developer, with extensive knowledge and Four months of
            internship experience in web technologies and Ui/Ux design,
            delivering quality work.
          </p>
          <div className={styles.detail}>
            <div>
              <h2 className={styles.h2ele}>04</h2>
              <p className={styles.para3}>
                Months <br /> experience
              </p>
            </div>
            <div>
              <h2 className={styles.h2ele}>10+</h2>
              <p className={styles.para3}>
                Completed <br /> projects
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.btn}>
        <Link
          href="https://drive.google.com/file/d/1O61DzdrsnQI134OmzX7cKnDaIK9VlNPb/view?usp=sharing"
          passHref={true}
        >
          <a className={styles.btn1}>Resume</a>
        </Link>
      </button>
    </div>
  );
};

export default About;
