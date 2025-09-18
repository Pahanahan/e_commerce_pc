import workDays from "../../../../data/work-days.json";

import address from "../../../../assets/icons/point-black.svg";
import phone from "../../../../assets/icons/phone.svg";
import clock from "../../../../assets/icons/clock.svg";
import message from "../../../../assets/icons/message.svg";
import styles from "./ContactsInfo.module.css";

interface WeekDay {
  day: string;
  hours: string;
}

function ContactsInfo() {
  const addressValue = workDays.address;
  const phoneValue = workDays.phone;
  const emailValue = workDays.email;
  const week = workDays["Monday - Thusday: "];
  const friday = workDays["Friday: "];
  const saturday = workDays["Saturday: "];
  const weekDays: WeekDay[] = [
    { day: "Monday - Thusday: ", hours: week },
    { day: "Friday: ", hours: friday },
    { day: "Saturday: ", hours: saturday },
  ];

  const weekDaysMap = weekDays.map(({ day, hours }, i) => {
    return (
      <p key={i} className={styles["contacts-info__text"]}>
        {day}
        {hours}
      </p>
    );
  });

  // const contactsInfoArr = [
  //   { title: "Address:", text: addressValue, img: address },
  //   { title: "Phone:", text: phoneValue, img: phone },
  //   { title: "We are open:", text: weekDaysMap, img: clock },
  //   { title: "E-mail:", text: emailValue, img: message },
  // ];

  // const contactsInfoMap = contactsInfoArr.map(({ title, text, img }) => {
  //   return (
  //     <div key={title} className={styles["contacts-info__item"]}>
  //       <img src={img} alt="address" />
  //       <div className={styles["contacts-info__box"]}>
  //         <p className={styles["contacts-info__title"]}>{title}</p>
  //         <p className={styles["contacts-info__text"]}>{text}</p>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <div className={styles["contacts-info"]}>
      <div className={styles["contacts-info__item"]}>
        <img
          className={styles["contacts-info__img"]}
          src={address}
          alt="address"
        />
        <div className={styles["contacts-info__box"]}>
          <p className={styles["contacts-info__title"]}>Address:</p>
          <p className={styles["contacts-info__text"]}>{addressValue}</p>
        </div>
      </div>
      <div className={styles["contacts-info__item"]}>
        <img className={styles["contacts-info__img"]} src={phone} alt="phone" />
        <div className={styles["contacts-info__box"]}>
          <p className={styles["contacts-info__title"]}>Phone:</p>
          <p className={styles["contacts-info__text"]}>{phoneValue}</p>
        </div>
      </div>
      <div className={styles["contacts-info__item"]}>
        <img className={styles["contacts-info__img"]} src={clock} alt="phone" />
        <div className={styles["contacts-info__box"]}>
          <p className={styles["contacts-info__title"]}>We are open:</p>
          {weekDaysMap}
        </div>
      </div>
      <div className={styles["contacts-info__item"]}>
        <img
          className={styles["contacts-info__img"]}
          src={message}
          alt="phone"
        />
        <div className={styles["contacts-info__box"]}>
          <p className={styles["contacts-info__title"]}>E-mail:</p>
          <a
            href={`mailto:${emailValue}`}
            className={styles["contacts-info__link"]}
          >
            {emailValue}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactsInfo;
