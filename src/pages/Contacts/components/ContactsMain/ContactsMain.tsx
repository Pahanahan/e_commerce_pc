import ContactsForm from "../ContactsForm/ContactsForm";
import ContactsInfo from "../ContactsInfo/ContactsInfo";

import styles from "./ContactsMain.module.css";

function ContactsMain() {
  return (
    <div className={styles["contacts-main"]}>
      <div className="container">
        <div className={styles["contacts-main__inner"]}>
          <ContactsForm />
          <ContactsInfo />
        </div>
      </div>
    </div>
  );
}

export default ContactsMain;
