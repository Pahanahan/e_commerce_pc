import { useState } from "react";

import Input from "../../../../ui/Input/Input";
import Radio from "../../../../ui/Radio/Radio";
import useClickOutside from "../../../../customHooks/useClickOutside";
import addressData from "../../../../data/address-data.json";

import arrowUp from "../../../../assets/icons/arrow-up.svg";
import styles from "./SummaryCart.module.css";

interface AllAddress {
  country: string;
  stateProvince: string;
  postalCode: string;
}

enum StandardOrPickup {
  STANDARD = "standart",
  PICKUP = "pickup",
}

const mainCountry = "United States";

function SummaryCart() {
  const [shippingTaxHidden, setShippingTaxHidden] = useState<boolean>(false);

  const [country, setCountry] = useState<string>(mainCountry);
  const [stateProvince, setStateProvince] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [delivery, setDelivery] = useState<StandardOrPickup>(
    StandardOrPickup.STANDARD
  );

  const [countrySelect, setCountrySelect] = useState<boolean>(false);
  const [stateProvinceSelect, setProvinceStateSelect] =
    useState<boolean>(false);

  const [allAddress, setAllAddress] = useState<AllAddress>({
    country: "",
    stateProvince: "",
    postalCode: "",
  });

  useClickOutside(setCountrySelect, `.${styles["country"]}`, false);

  useClickOutside(
    setProvinceStateSelect,
    `.${styles["state-province"]}`,
    false
  );

  const countryData = addressData.countries;

  const countryMap = countryData.map((country) => {
    return (
      <li
        onClick={() => handleChangeCountry(country.name)}
        key={country.code}
        className={styles["summary__shipping-option"]}
      >
        {country.name}
      </li>
    );
  });

  const stateProvinceFinded = countryData.find((item) => item.name === country);

  const stateProvinceMap = stateProvinceFinded?.states.map((country) => {
    return (
      <li
        onClick={() => handleChangeProvinceState(country.name)}
        key={country.code}
        className={styles["summary__shipping-option"]}
      >
        {country.name}
      </li>
    );
  });

  const handleChangeCountry = (country: string) => {
    setCountry(country);
    setStateProvince("");
    setPostalCode("");
    setCountrySelect(false);
  };

  const handleHideProvinceStateSelect = () => {
    setCountrySelect(!countrySelect);
    setProvinceStateSelect(false);
  };

  const handleChangeProvinceState = (stateProvince: string) => {
    setStateProvince(stateProvince);
    setPostalCode("");
    setProvinceStateSelect(false);
  };

  const handleHideCountrySelect = () => {
    setProvinceStateSelect(!stateProvinceSelect);
    setCountrySelect(false);
  };

  const handleChangePostalCode = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;
    setPostalCode(value);
  };

  const cssImageCountry = `${styles["summary__shipping-select-arrow"]} ${
    countrySelect ? "" : styles["summary__shipping-select-arrow--reversed"]
  }`;

  const cssImageStateProvince = `${styles["summary__shipping-select-arrow"]} ${
    stateProvinceSelect
      ? ""
      : styles["summary__shipping-select-arrow--reversed"]
  }`;

  const optionsCountry = `${styles["summary__shipping-options-box"]} ${
    countrySelect ? styles["summary__shipping-options-box--visible"] : ""
  }`;

  const optionsStateProvince = `${styles["summary__shipping-options-box"]} ${
    stateProvinceSelect ? styles["summary__shipping-options-box--visible"] : ""
  }`;

  return (
    <form name="summary" className={styles["summary"]}>
      <h3 className={styles["summary__title"]}>Summary</h3>
      <div className={styles["summary__shipping-tax"]}>
        <div className={styles["summary__shipping-tax-box"]}>
          <div className={styles["summary__shipping-tax-text"]}>
            Estimate Shipping and Tax
          </div>
          <img src={arrowUp} alt="arrow" />
        </div>
        <p className={styles["summary__shipping-tax-p"]}>
          Enter your destination to get a shipping estimate.
        </p>
        <div className={styles["summary__shipping-inputs"]}>
          <label className={styles["summary__shipping-label"]}>
            Country
            <div
              onClick={() => handleHideProvinceStateSelect()}
              className={`${styles["summary__shipping-select"]} ${styles["country"]}`}
            >
              {country}
              <img className={cssImageCountry} src={arrowUp} alt="arrow" />
              <ul className={optionsCountry}>{countryMap}</ul>
            </div>
          </label>

          <label className={styles["summary__shipping-label"]}>
            State/Province
            <div
              onClick={() => handleHideCountrySelect()}
              className={`${styles["summary__shipping-select"]} ${styles["state-province"]}`}
            >
              {stateProvince}
              <img
                className={cssImageStateProvince}
                src={arrowUp}
                alt="arrow"
              />
              <ul className={optionsStateProvince}>{stateProvinceMap}</ul>
            </div>
          </label>

          <label className={styles["summary__shipping-label"]}>
            Zip/Postal Code
            <Input
              name="postalCode"
              type="text"
              value={postalCode}
              onChange={handleChangePostalCode}
            />
          </label>

          <Radio
            checked={delivery === StandardOrPickup.STANDARD}
            onChange={() => setDelivery(StandardOrPickup.STANDARD)}
            title="Standard Rate"
            name="radio"
            text="Price may vary depending on the item/destination. Shop Staff will contact you. $21.00"
          />
          <Radio
            checked={delivery === StandardOrPickup.PICKUP}
            onChange={() => setDelivery(StandardOrPickup.PICKUP)}
            title="Pickup from store"
            name="radio"
            text="1234 Street Adress City Address, 1234 $0.00"
          />
        </div>
      </div>
    </form>
  );
}

export default SummaryCart;
