import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.container}>
        <Link href="/">
          <h1 className={styles.logoTitle}>Next Corporation</h1>
        </Link>
      </header>
    </>
  );
};
