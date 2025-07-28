import { useState } from "react";
import { useSelector } from "react-redux";

import SortAndShow from "../SortAndShow/SortAndShow";
import ActiveSorted from "../ActiveSorted/ActiveSorted";
import ProductsBox from "../ProductsBox/ProductsBox";
import Pagination from "../Pagination/Pagination";
import More from "../More/More";
import { selectAllFilteredProducts } from "../../../../redux/selectors/productsSelectors";

import styles from "./RightSide.module.css";

function RightSide({
  onSetCategoryActiveIndex,
  onSetPriceActiveIndex,
  onSetBrandActiveIndex,
}) {
  const [listOrGrid, setListOrGrid] = useState("grid");
  const { pageShowProducts } = useSelector((products) => products.products);
  const allFilteredProducts = useSelector(selectAllFilteredProducts);

  return (
    <div className={styles["right"]}>
      <SortAndShow onSetListOrGrid={setListOrGrid} listOrGrid={listOrGrid} />
      <ActiveSorted
        onSetCategoryActiveIndex={onSetCategoryActiveIndex}
        onSetPriceActiveIndex={onSetPriceActiveIndex}
        onSetBrandActiveIndex={onSetBrandActiveIndex}
      />
      <ProductsBox listOrGrid={listOrGrid} />
      {allFilteredProducts.length > pageShowProducts ? <Pagination /> : ""}
      <More />
    </div>
  );
}

export default RightSide;
