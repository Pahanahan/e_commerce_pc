import styles from "./Tabs.module.css";

interface TabsProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabsOptions = ["About Product", "Details", "Specs"];

  const tabsMap = tabsOptions.map((tab, i) => {
    return (
      <div
        key={tab}
        onClick={() => setActiveTab(i)}
        className={`${styles["tabs__item"]} ${
          activeTab === i ? styles["tabs__item--active"] : ""
        }`}
      >
        {tab}
      </div>
    );
  });

  return (
    <div className={styles["tabs"]}>
      <div className={styles["tabs__items"]}>{tabsMap}</div>
    </div>
  );
}

export default Tabs;
