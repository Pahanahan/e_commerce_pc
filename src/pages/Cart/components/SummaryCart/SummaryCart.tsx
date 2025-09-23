import { useState, useRef } from "react";

import Input from "../../../../ui/Input/Input";
import Radio from "../../../../ui/Radio/Radio";
import Label from "./components/Label/Label";
import Button from "../../../../ui/Button/Button";
import Subtotal from "./components/Subtotal/Subtotal";
import BuyNowPayLater from "../../../../components/BuyNowPayLater/BuyNowPayLater";
import useClickOutside from "../../../../customHooks/useClickOutside";
import accordion from "../../../../utils/accordion";
import { Product, User } from "../../../../types/types";
import addressData from "../../../../data/address-data.json";

import arrowUp from "../../../../assets/icons/arrow-up.svg";
import payPal from "../../../../assets/icons/paypal-btn.svg";
import styles from "./SummaryCart.module.css";

interface AllAddress {
  country: string;
  stateProvince: string;
  postalCode: string;
  delivery: string;
}

enum StandardOrPickup {
  STANDARD = "standard",
  PICKUP = "pickup",
}

interface SummaryCartProps {
  allProducts: Product[];
  findUser: User | undefined;
}

const mainCountry = "United States";

function SummaryCart({ allProducts, findUser }: SummaryCartProps) {
  const [shippingTaxAccordion, setShippingTaxAccordion] =
    useState<boolean>(true);
  const [applyAccordion, setApplyAccordion] = useState<boolean>(true);
  const imgShippingTaxRef = useRef<HTMLImageElement | null>(null);
  const imgApplyRef = useRef<HTMLImageElement | null>(null);

  const [country, setCountry] = useState<string>(mainCountry);
  const [stateProvince, setStateProvince] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [delivery, setDelivery] = useState<StandardOrPickup>(
    StandardOrPickup.STANDARD
  );

  const [discountCode, setDiscountCode] = useState<string>("");

  const [countrySelect, setCountrySelect] = useState<boolean>(false);
  const [stateProvinceSelect, setProvinceStateSelect] =
    useState<boolean>(false);

  const [allAddress, setAllAddress] = useState<AllAddress>({
    country: country,
    stateProvince: stateProvince,
    postalCode: postalCode,
    delivery: delivery,
  });

  const userCart = findUser?.cart;

  const totalPrice = userCart
    ?.flatMap((item) => {
      const filteredCartProducts = allProducts.filter(
        (product) => item.id === product.id
      );

      if (filteredCartProducts) {
        const subtotal = filteredCartProducts.map((product) => {
          return product.price * item.quantity;
        });

        return subtotal;
      } else return 0;
    })
    .reduce((acc, price) => acc + price, 0);

  const totalPriceOrZero: number = totalPrice ? totalPrice : 0;

  const countryData = addressData.countries;
  const currentCountry = countryData.find((item) => item.name === country);
  const tax = currentCountry?.tax!;
  const taxName = currentCountry?.taxName!;
  const shippingRate = currentCountry?.shippingRate ?? 0.1;

  const countryMap = countryData.map((country) => {
    return (
      <li
        onClick={() => handleChangeCountry(country.name)}
        key={country.code}
        className={styles["summary__option"]}
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
        className={styles["summary__option"]}
      >
        {country.name}
      </li>
    );
  });

  useClickOutside(setCountrySelect, `.${styles["country"]}`, false);

  useClickOutside(
    setProvinceStateSelect,
    `.${styles["state-province"]}`,
    false
  );

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

  const handleChangeDiscountCode = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;
    setDiscountCode(value);
  };

  return (
    <form name="summary" className={styles["summary"]}>
      <h3 className={styles["summary__title"]}>Summary</h3>
      <div className={styles["summary__inner"]}>
        <div
          onClick={() =>
            accordion(
              shippingTaxAccordion,
              setShippingTaxAccordion,
              imgShippingTaxRef
            )
          }
          className={styles["summary__show"]}
        >
          <div className={styles["summary__show-text"]}>
            Estimate Shipping and Tax
          </div>
          <img
            className={styles["summary__show-img"]}
            ref={imgShippingTaxRef}
            src={arrowUp}
            alt="arrow"
          />
        </div>
        <p className={styles["summary__text"]}>
          Enter your destination to get a shipping estimate.
        </p>

        <div
          className={`${styles["summary__container"]} ${
            shippingTaxAccordion ? styles["summary__container--open"] : ""
          }`}
        >
          <div className={styles["summary__inputs"]}>
            <Label
              title="Country"
              className="country"
              onClick={handleHideProvinceStateSelect}
              stateText={country}
              elementMap={countryMap}
              select={countrySelect}
            />

            <Label
              title="State/Province"
              className="state-province"
              onClick={handleHideCountrySelect}
              stateText={stateProvince}
              elementMap={stateProvinceMap}
              select={stateProvinceSelect}
            />

            <label className={styles["summary__label"]}>
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
      </div>

      <div className={styles["summary__apply"]}>
        <div
          onClick={() =>
            accordion(applyAccordion, setApplyAccordion, imgApplyRef)
          }
          className={styles["summary__show"]}
        >
          <div className={styles["summary__show-text"]}>
            Apply Discount Code
          </div>
          <img
            className={styles["summary__show-img"]}
            ref={imgApplyRef}
            src={arrowUp}
            alt="arrow"
          />
        </div>

        <div
          className={`${styles["summary__container"]} ${
            applyAccordion ? styles["summary__container--open"] : ""
          }`}
        >
          <div className={styles["summary__inputs"]}>
            <label className={styles["summary__label"]}>
              Enter discount code
              <Input
                name="discountCode"
                type="text"
                value={discountCode}
                onChange={handleChangeDiscountCode}
              />
            </label>
            <div className={styles["summary__margin-bottom"]}></div>

            <Button
              type="button"
              color="#0156FF"
              backgroundColor="transparent"
              border="2px solid #0156FF"
              width="100%"
            >
              Apply Discount
            </Button>
          </div>
        </div>
      </div>

      <Subtotal
        tax={tax}
        taxName={taxName}
        delivery={delivery}
        totalPrice={totalPriceOrZero}
        shippingRate={shippingRate}
      />

      <div className={styles["summary__btns"]}>
        <Button width="100%">Proceed to Checkout</Button>
        <Button
          width="100%"
          backgroundColor="#FFB800"
          color="#232C65"
          href="https://www.paypal.com/"
        >
          Check out with
          <img src={payPal} alt="paypal" style={{ marginLeft: "15px" }} />
        </Button>
      </div>

      <BuyNowPayLater background="transparent" />
    </form>
  );
}

export default SummaryCart;
