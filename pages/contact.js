import styles from '../styles/Contact.module.css';
import { BsFillTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { BiLocationPlus } from 'react-icons/bi';
const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.h1ele}>Contact Me</h1>
      <p className={styles.para}>Get in touch</p>

      <div className={styles.details}>
        <div className={styles.contdetail1}>
          <div className={styles.data}>
            <div className={styles.data1}>
              <BsFillTelephoneFill className={styles.icon} />
              <h2 className={styles.h2ele}>Call Me</h2>
            </div>
            <p className={styles.para1}>7667975747</p>
          </div>
          <div className={styles.data}>
            <div className={styles.data1}>
              <BsFillEnvelopeFill className={styles.icon} />
              <h2 className={styles.h2ele}>Email</h2>
            </div>
            <p className={styles.para1}>itspriti1999@gmail.com</p>
          </div>
          <div className={styles.data}>
            <div className={styles.data1}>
              <BiLocationPlus className={styles.icon} />
              <h2 className={styles.h2ele}>Location</h2>
            </div>
            <p className={styles.para1}>Chaibasa, Jharkhand</p>
          </div>
        </div>

        <div className={styles.contdetail2}>
          <form action="" className={styles.contact_form}>
            <div className={styles.contact_inputs}>
              <div className={styles.contact_content}>
                <label type="text" className={styles.contact_label}>
                  Name
                </label>
                <input type="text" className={styles.contact_input} />
              </div>
              <div className={styles.contact_content}>
                <label type="text" className={styles.contact_label}>
                  Email
                </label>
                <input type="email" className={styles.contact_input} />
              </div>
            </div>
            <div className={styles.contact_content}>
              <label type="text" className={styles.contact_label}>
                Project
              </label>
              <input type="text" className={styles.contact_input} />
            </div>
            <div className={styles.contact_content}>
              <label type="text" className={styles.contact_label}>
                Message
              </label>
              <textarea
                name=""
                id=""
                cols="0"
                rows="7"
                className={styles.contact_input}
              ></textarea>
            </div>
            <div>
              <a className={styles.btn}>Send Message</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
