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

export default function Top() {
  return (
    <>
      <div className={styles.fv}></div>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.title}>MISSION</h2>
          <div>
            <div>
              <p>
                「デジタルイノベーションを通じて、未来のビジネスを創造する」
              </p>
              <p>
                Web World
                Creators株式会社は、最先端のウェブ技術と創造的なデザインを融合させ、クライアントのビジネスが直面する課題を解決します。私たちは、持続可能で効果的なデジタルソリューションを提供することにより、クライアントのビジネス成長を加速させることを使命としています。
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>SERVICE</h2>
          <div>
            {SEVICE_SECTION_CONTENTS.map((content) => (
              <div key={content.id}>
                <p>{content.title}</p>
                <p>{content.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>NEWS</h2>
        </div>
      </div>
    </>
  );
}
