import styles from "./page.module.css";

export default function Top() {
  return (
    <>
      <div className={styles.fv}></div>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.title}>MISSION</h2>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>SERVICE</h2>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>NEWS</h2>
        </div>
      </div>
    </>
  );
}
