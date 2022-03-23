import styles from '../styles/Skills.module.css';
import { AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const openMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(!isOpen);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.skill}>
      <h2 className={styles.h2ele}>Skills</h2>
      <div className={styles.text1}>My technical level</div>

      <div className={styles.container3}>
        <div className={styles.main}>
          <div className={(styles.skillcontent, styles.skills_close)}>
            <div className={styles.header} onClick={closeMenu}>
              <h1 className={styles.title}>Frontend developer</h1>
              <AiOutlineDown className={styles.skill_arrow} />
            </div>

            <div
              className={styles.skilllist}
              className={
                isOpen
                  ? (styles.skills_open)
                  : styles.skills_close
              }
            >
              <div className={styles.data}>
                <div className={styles.skilltitle}>
                  <h3 className={styles.name}>HTML</h3>
                  <span className={styles.number}>90%</span>
                </div>
                <div className={styles.bar}>
                  <div className={(styles.perce, styles.html)}></div>
                </div>
              </div>
              <div className={styles.data}>
                <div className={styles.skilltitle}>
                  <h3 className={styles.name}>CSS</h3>
                  <span className={styles.number}>80%</span>
                </div>
                <div className={styles.bar}>
                  <div className={(styles.perce, styles.css)}></div>
                </div>
              </div>
              <div className={styles.data}>
                <div className={styles.skilltitle}>
                  <h3 className={styles.name}>JavaScript</h3>
                  <span className={styles.number}>70%</span>
                </div>
                <div className={styles.bar}>
                  <div className={(styles.perce, styles.js)}></div>
                </div>
              </div>
              <div className={styles.data}>
                <div className={styles.skilltitle}>
                  <h3 className={styles.name}>React.js</h3>
                  <span className={styles.number}>70%</span>
                </div>
                <div className={styles.bar}>
                  <div className={styles.react}></div>
                </div>
              </div>
              <div className={styles.data}>
                <div className={styles.skilltitle}>
                  <h3 className={styles.name}>Next.js</h3>
                  <span className={styles.number}>50%</span>
                </div>
                <div className={styles.bar}>
                  <div className={styles.next}></div>
                </div>
              </div>
              <div className={styles.data}>
                <div className={styles.skilltitle}>
                  <h3 className={styles.name}>Bootstrap</h3>
                  <span className={styles.number}>80%</span>
                </div>
                <div className={styles.bar}>
                  <div className={styles.boot}></div>
                </div>
              </div>
              <div className={styles.data}>
                <div className={styles.skilltitle}>
                  <h3 className={styles.name}>Tailwind Css</h3>
                  <span className={styles.number}>70%</span>
                </div>
                <div className={styles.bar}>
                  <div className={styles.tail}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main1}>
            <div className={(styles.skillcontent, styles.skills_close)}>
              <div className={styles.header} onClick={openMenu}>
                <h1 className={styles.title}>Backend developer</h1>
                <AiOutlineDown className={styles.skill_arrow} />
              </div>

              <div
                className={styles.skilllist}
                className={
                  isOpen
                    ? (styles.skills_open, styles.skilllist)
                    : styles.skills_close
                }
              >
                <div className={styles.data}>
                  <div className={styles.skilltitle}>
                    <h3 className={styles.name}>Firebase</h3>
                    <span className={styles.number}>70%</span>
                  </div>
                  <div className={styles.bar}>
                    <div className={styles.fire}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={(styles.skillcontent, styles.skills_close)}>
              <div className={styles.header} onClick={openMenu}>
                <h1 className={styles.title}>Design</h1>
                <AiOutlineDown className={styles.skill_arrow} />
              </div>

              <div
                className={styles.skilllist}
                className={
                  isOpen
                    ? (styles.skills_open)
                    : styles.skills_close
                }
              >
                <div className={styles.data}>
                  <div className={styles.skilltitle}>
                    <h3 className={styles.name}>Figma</h3>
                    <span className={styles.number}>70%</span>
                  </div>
                  <div className={styles.bar}>
                    <div className={styles.fire}></div>
                  </div>
                </div>
                <div className={styles.data}>
                  <div className={styles.skilltitle}>
                    <h3 className={styles.name}>Photoshop</h3>
                    <span className={styles.number}>70%</span>
                  </div>
                  <div className={styles.bar}>
                    <div className={styles.fire}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
