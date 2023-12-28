import { MdPlayCircleFilled } from "react-icons/md";
import styles from "./Rightbar.module.css";

export default function Rightbar() {
  return (
    <aside className={styles.container}>
      <FirstCard />
    </aside>
  );
}

const FirstCard = () => {
  return (
    <section className={styles.item}>
      <div className={styles["bg-container"]}>
        <img src="" alt="" />
      </div>
      <div className={styles.texts}>
        <span className={styles.notification}>🔥 Avalible Now</span>
        <h3 className={styles.title}>
          How to use the nw version of the admin dashboard?
        </h3>
        <span className={styles.subtitle}>Takes 4 minutes to learn</span>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum,
          eros eu condimentum porta, orci purus viverra lacus, non finibus arcu
          magna in justo.
        </p>
        <button className={styles.button}>
          <MdPlayCircleFilled />
          Watch
        </button>
      </div>
    </section>
  );
};
