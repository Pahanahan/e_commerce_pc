import SortAndShow from "../SortAndShow/SortAndShow";
import ActiveSorted from "../ActiveSorted/ActiveSorted";
import ProductsBox from "../ProductsBox/ProductsBox";
import Pagination from "../Pagination/Pagination";
import More from "../More/More";
import styles from "./RightSide.module.css";

function RightSide() {
  return (
    <div className={styles["right"]}>
      <SortAndShow />
      <ActiveSorted />
      <ProductsBox />
      <Pagination />
      <More />
    </div>
  );
}

export default RightSide;
