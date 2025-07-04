import Button from "../../../../components/Button/Button";

import styles from "./Register.module.css";

function Register() {
  return (
    <div className={styles["register"]}>
      <h3>New Customer?</h3>
      <p>Creating an account has many benefits:</p>
      <ul>
        <li>Chek out faster</li>
        <li>Keep more than one address</li>
        <li>Track orders and more</li>
      </ul>
      <Button title={"Create An Account"} />
    </div>
  );
}

export default Register;
