import { useDispatch } from "react-redux";

import { addBrandFilter } from "../../../../redux/products/actionCreators";
import roccat from "../../../../assets/images/partners/roccat-min.png";
import msi from "../../../../assets/images/partners/msi-min.png";
import thermaltake from "../../../../assets/images/partners/thermaltake-min.png";
import adata from "../../../../assets/images/partners/adata-min.png";
import hp from "../../../../assets/images/partners/hp-min.png";
import gigabyte from "../../../../assets/images/partners/gigabyte-min.png";
import styles from "./Brands.module.css";

function Brands({ onBrandActiveIndes, onSetBrandActiveIndes }) {
  const dispatch = useDispatch();

  const brands = [
    [0, "roccat", roccat],
    [1, "MSI", msi],
    [2, "Thermaltake", thermaltake],
    [3, "adata", adata],
    [4, "hp", hp],
    [5, "gigabyte", gigabyte],
  ];

  const handleFilterBrand = (brand, id) => {
    onSetBrandActiveIndes(id);
    dispatch(addBrandFilter(brand));
  };

  const brandsMap = brands.map((item, i) => (
    <div
      onClick={() => handleFilterBrand(item[1], i)}
      key={item[0]}
      className={`${styles["brands__item"]} ${
        onBrandActiveIndes === i ? styles["active"] : ""
      }`}
    >
      <img src={item[2]} />
    </div>
  ));

  return (
    <div className={styles["brands"]}>
      <h2 className={styles["brands__title"]}>Brands</h2>
      <button className={styles["brands__show-all"]}>All Brands</button>
      <div className={styles["brands__box"]}>{brandsMap}</div>
    </div>
  );
}

export default Brands;
