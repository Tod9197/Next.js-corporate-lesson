import styles from "./page.module.css";

const COMPANY_PROFILES = [
  {
    id: 1,
    title: "設立",
    content: "2020年",
  },
  {
    id: 2,
    title: "本社所在地",
    content: "東京都",
  },
  {
    id: 3,
    title: "代表取締役",
    content: "俵屋徳之",
  },
  {
    id: 4,
    title: "従業員数",
    content: "50人",
  },
  {
    id: 5,
    title: "主要取引先",
    content: "スタートアップ企業、中小企業、大企業",
  },
];

export default function Company() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Company</h2>
        <div className={styles.content}>
          {COMPANY_PROFILES.map((data) => (
            <div key={data.id} className={styles.data}>
              <p className={styles["data-title"]}>{data.title}</p>
              <p>{data.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
