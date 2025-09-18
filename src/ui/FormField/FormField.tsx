import styles from "./FormField.module.css";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

function FormField({ label, children }: FormFieldProps) {
  return (
    <>
      <label className={styles["form-field"]}>
        <span className={styles["form-field__label"]}>{label}</span>
        {children}
      </label>
    </>
  );
}

export default FormField;
