import { useSelector, useDispatch } from "react-redux";

import { changeCurrentPage } from "../../../../redux/products/actionCreators";

import { selectAllProducts } from "../../../../redux/selectors/productsSelectors";

import styles from "./Pagination.module.css";
import arrowLeft from "../../../../assets/icons/arrow-left-grey.svg";
import arrowRight from "../../../../assets/icons/arrow-right-grey.svg";

function Pagination() {
  const select = selectAllProducts();
  console.log(select);
  const { currentPage, pageShowProducts, allFilteredProducts } = useSelector(
    (products) => products.products
  );
  const dispatch = useDispatch();

  const currentAllPages = Math.ceil(
    allFilteredProducts.length / pageShowProducts
  );

  let arrayNumbers = [];
  for (let i = 1; i <= currentAllPages; i++) {
    arrayNumbers.push(i);
  }

  const handleChangePage = (num) => {
    if (
      (num === "prev" && currentPage === 1) ||
      (num === "next" && currentPage === currentAllPages)
    )
      return;
    dispatch(changeCurrentPage(num));
  };

  const pagination = arrayNumbers.map((num) => {
    if (num === currentPage) {
      return (
        <div
          onClick={() => handleChangePage(num)}
          key={num}
          className={styles["pagination__item--active"]}
        >
          {num}
        </div>
      );
    } else {
      return (
        <div
          onClick={() => handleChangePage(num)}
          key={num}
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
        onClick={() => handleChangePage("prev")}
        className={styles["pagination__item"]}
      >
        <img src={arrowLeft} alt="arrow-left" />
      </div>
      {pagination}
      <div
        onClick={() => handleChangePage("next")}
        className={styles["pagination__item"]}
      >
        <img src={arrowRight} alt="arrow-right" />
      </div>
    </div>
  );
}

export default Pagination;
