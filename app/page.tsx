import styles from "./page.module.css";

const SEVICE_SECTION_CONTENTS = [
  {
    id: 1,
    title: "1. ウェブ開発",
    description: "カスタムウェブサイトの開発、eコマースソリューション",
  },
  {
    id: 2,
    title: "2. モバイルアプリ開発",
    description: "iOSおよびAndroid向けの革新的なモバイルアプリケーション",
  },
  {
    id: 3,
    title: "3. UI/UXデザイン",
    description:
      "ユーザー中心のデザインで、最適なユーザーエクスペリエンスを提供",
  },
  {
    id: 4,
    title: "4. デジタルマーケティング",
    description:
      "SEO、ソーシャルメディアマーケティング、コンテンツ戦略によるオンラインプレゼンスの強化",
  },
];

const NEWS_CONTENTS = [
  {
    id: 1,
    date: "2024/06/23",
    description: "環境に配慮したウェブホスティングサービスの提供を開始",
  },
  {
    id: 2,
    date: "2024/08/23",
    description: "新オフィス開設に伴い、東京都内での採用を強化",
  },
  {
    id: 3,
    date: "2024/09/23",
    description: "当社のモバイルアプリ開発チームが、国際デザイン賞を受賞",
  },
  {
    id: 4,
    date: "2024/10/23",
    description:
      "Web World Creators株式会社、AIを活用したウェブアナリティクスツールをリリース",
  },
];

export default function Top() {
  return (
    <>
      <div className={styles.fv}></div>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.title}>MISSION</h2>
          <div className={styles["section-contents"]}>
            <div className={styles["section-text"]}>
              <p className={styles["large-text"]}>
                「デジタルイノベーションを通じて、未来のビジネスを創造する」
              </p>
              <p>
                Web World
                Creators株式会社は、最先端のウェブ技術と創造的なデザインを融合させ、クライアントのビジネスが直面する課題を解決します。私たちは、持続可能で効果的なデジタルソリューションを提供することにより、クライアントのビジネス成長を加速させることを使命としています。
              </p>
            </div>
            <div className={styles["section-img"]}></div>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>SERVICE</h2>
          <div className={styles.article}>
            {SEVICE_SECTION_CONTENTS.map((content) => (
              <div key={content.id} className={styles["article-content"]}>
                <p className={styles["medium-text"]}>{content.title}</p>
                <p className={styles["small-text"]}>{content.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>NEWS</h2>
          <div>
            {NEWS_CONTENTS.map((news) => (
              <div key={news.id} className={styles.news}>
                <p className={styles["news-text"]}>{news.date}</p>
                <p className={styles["news-content"]}>{news.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
