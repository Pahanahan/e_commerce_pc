import styles from "./ContactsForm.module.css";

function ContactsForm() {
  return (
    <form className={styles["contacts-form"]}>
      <div className={styles["contacts-form__text"]}>
        <p>We love hearing from you, our Shop customers.</p>
        <p>
          Please contact us and we will make sure to get back to you as soon as
          we possibly can.
        </p>
      </div>
    </form>
  );
}

export default ContactsForm;
