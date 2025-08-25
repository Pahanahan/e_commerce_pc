import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../../redux/store";
import SortAndShow from "../SortAndShow/SortAndShow";
import ActiveSorted from "../ActiveSorted/ActiveSorted";
import ProductsBox from "../ProductsBox/ProductsBox";
import Pagination from "../Pagination/Pagination";
import More from "../More/More";
import { selectAllFilteredProducts } from "../../../../redux/selectors/productsSelectors";
import { GridOrList } from "../../../../types/types";

import styles from "./RightSide.module.css";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

interface RightSideProps {
  onSetCategoryActiveIndex: Setter<null | number>;
  onSetPriceActiveIndex: Setter<null | number>;
  onSetBrandActiveIndex: Setter<null | number>;
}

function RightSide({
  onSetCategoryActiveIndex,
  onSetPriceActiveIndex,
  onSetBrandActiveIndex,
}: RightSideProps) {
  const [listOrGrid, setListOrGrid] = useState<GridOrList>(GridOrList.GRID);
  const { pageShowProducts } = useSelector(
    (products: RootState) => products.products
  );
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
