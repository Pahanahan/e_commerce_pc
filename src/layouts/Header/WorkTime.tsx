import workDays from "../../data/work-days.json";

import time from "../../assets/icons/time.svg";
import point from "../../assets/icons/point.svg";
import styles from "./WorkTime.module.css";

function WorkTime() {
  const workDayWeek = { day: "Mon-Thu: ", hours: workDays["Mon-Thu: "] };
  const workDaysFr = { day: "Fr: ", hours: workDays["Fr: "] };
  const workDaySat = { day: "Sat: ", hours: workDays["Sat: "] };
  const address = workDays.address;
  const phones = workDays.phone;
  const email = workDays.email;

  const workDaysData = [workDayWeek, workDaysFr, workDaySat];

  const workDaysMap = workDaysData.map(({ day, hours }, i) => {
    return (
      <div key={i}>
        <p className={styles["work__item-day"]}>
          {day} <span>{hours}</span>
        </p>
      </div>
    );
  });

  return (
    <div className={styles["work"]}>
      <div className={styles["work__item"]}>
        <img src={time} alt="time icon" />
        <div>
          <p className={styles["work__item-p"]}>We are open:</p>
          {workDaysMap}
        </div>
      </div>
      <div className={styles["work__item"]}>
        <img src={point} alt="point icon" />
        <p className={styles["work__item-p"]}>Address: {address}</p>
      </div>
      <div className={styles["work__links"]}>
        <p>
          Phones: <a href="tel:0012345678">{phones}</a>
        </p>
        <p>
          E-mail: <a href="mailto:shop@email.com">{email}</a>
        </p>
      </div>
    </div>
  );
}

export default WorkTime;
