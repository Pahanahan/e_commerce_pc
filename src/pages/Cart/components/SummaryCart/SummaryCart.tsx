import { useState } from "react";

import Input from "../../../../ui/Input/Input";
import Checkbox from "../../../../ui/Checkbox/Checkbox";

import arrowUp from "../../../../assets/icons/arrow-up.svg";
import styles from "./SummaryCart.module.css";

function SummaryCart() {
  const [shippingTaxHidden, setShippingTaxHidden] = useState<boolean>(false);

  const [country, setCountry] = useState<string>("");
  const [stateProvince, setStateProvince] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");

  // const stateProvinceRef = useState<HTMLInputElement | null>(null);
  // const postalCodeRef = useState<HTMLInputElement | null>(null);

  const handleChangeStateProvince = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;
    setStateProvince(value);
  };

  const handleChangePostalCode = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;
    setPostalCode(value);
  };

  return (
    <form className={styles["summary"]}>
      <h3 className={styles["summary__title"]}>Summary</h3>
      <div className={styles["summary__shipping-tax"]}>
        <div className={styles["summary__shipping-tax-box"]}>
          <div className={styles["summary__shipping-tax-text"]}>
            Estimate Shipping and Tax
          </div>
          <img src={arrowUp} alt="arrow" />
        </div>{" "}
        <p className={styles["summary__shipping-tax-p"]}>
          Enter your destination to get a shipping estimate.
        </p>
        <div className={styles["summary__shipping-inputs"]}>
          <p className={styles["summary__shipping-inputs-text"]}>Country</p>
          <div className={styles["summary__shipping-country"]}></div>
          <p className={styles["summary__shipping-inputs-text"]}>
            State/Province
          </p>
          <Input
            name="stateProvince"
            type="text"
            value={stateProvince}
            onChange={handleChangeStateProvince}
          />
          <p className={styles["summary__shipping-inputs-text"]}>
            Zip/Postal Code
          </p>
          <Input
            name="postalCode"
            type="text"
            value={postalCode}
            onChange={handleChangePostalCode}
          />
          <p className={styles["summary__shipping-inputs-text"]}>
            Standard Rate
          </p>
          <Checkbox text="Price may vary depending on the item/destination. Shop Staff will contact you. $21.00" />
          <p className={styles["summary__shipping-inputs-text"]}>
            Pickup from store
          </p>
          <Checkbox text="1234 Street Adress City Address, 1234 $0.00" />
        </div>
      </div>
    </form>
  );
}

export default SummaryCart;
