import { useSelector, useDispatch } from "react-redux";

import {
  changeCurrentPage,
  NewPage,
} from "../../../../redux/products/reducers";
import { selectAllFilteredProducts } from "../../../../redux/selectors/productsSelectors";
import getPaginationRange from "../../../../utils/getPaginationRange";
import { RootState } from "../../../../redux/store";

import styles from "./Pagination.module.css";
import arrowLeft from "../../../../assets/icons/arrow-left-grey.svg";
import arrowRight from "../../../../assets/icons/arrow-right-grey.svg";

function Pagination() {
  const currentPage: number = useSelector(
    (state: RootState) => state.products.currentPage
  );
  const pageShowProducts: number = useSelector(
    (state: RootState) => state.products.pageShowProducts
  );
  const allFilteredProducts = useSelector(selectAllFilteredProducts);
  const dispatch = useDispatch();

  const currentAllPages = Math.ceil(
    allFilteredProducts.length / pageShowProducts
  );

  const handleChangePage = (num: number | NewPage) => {
    if (
      (num === NewPage.PREV && currentPage === 1) ||
      (num === NewPage.NEXT && currentPage === currentAllPages)
    )
      return;
    dispatch(changeCurrentPage(num));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const paginationArray = getPaginationRange(currentPage, currentAllPages, 5);

  const pagination = paginationArray.map((num: number | NewPage, i) => {
    if (num === currentPage) {
      return (
        <div
          onClick={() => handleChangePage(num)}
          key={i}
          className={styles["pagination__item--active"]}
        >
          {num}
        </div>
      );
    } else if (num === NewPage.DOTS) {
      return (
        <div key={i} className={styles["pagination__item-more"]}>
          {num}
        </div>
      );
    } else {
      return (
        <div
          onClick={() => handleChangePage(num)}
          key={i}
          className={styles["pagination__item"]}
        >
          {num}
        </div>
      );
    }
  });

  return (
    <div className={styles["pagination"]}>
      <div
        onClick={() => handleChangePage(NewPage.PREV)}
        className={styles["pagination__item"]}
      >
        <img src={arrowLeft} alt="arrow-left" />
      </div>
      {pagination}
      <div
        onClick={() => handleChangePage(NewPage.NEXT)}
        className={styles["pagination__item"]}
      >
        <img src={arrowRight} alt="arrow-right" />
      </div>
    </div>
  );
}

export default Pagination;
