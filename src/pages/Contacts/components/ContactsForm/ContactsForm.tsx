import { useState, useRef, useCallback } from "react";
import { IoClose } from "react-icons/io5";

import FormField from "../../../../ui/FormField/FormField";
import Input from "../../../../ui/Input/Input";
import Textarea from "../../../../ui/Textarea/Textarea";
import Button from "../../../../components/Button/Button";
import {
  changeName,
  changeEmail,
  changePhone,
  changeTextarea,
} from "../../../../utils/validation";

import styles from "./ContactsForm.module.css";

function ContactsForm() {
  const [modalSendler, setModalSendler] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [textarea, setTextarea] = useState<string>("");

  const [nameValid, setNameValid] = useState<boolean>(false);
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [phoneValid, setPhoneValid] = useState<boolean>(false);
  const [textareaValid, setTextareaValid] = useState<boolean>(false);

  const [correctName, setCorrectName] = useState<boolean>(true);
  const [correctEmail, setCorrectEmail] = useState<boolean>(true);
  const [correctTextarea, setCorrectTextarea] = useState<boolean>(true);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fields = [
      {
        valid: nameValid,
        ref: nameRef,
        setCorrect: setCorrectName,
      },
      {
        valid: emailValid,
        ref: emailRef,
        setCorrect: setCorrectEmail,
      },
      {
        valid: textareaValid,
        ref: textareaRef,
        setCorrect: setCorrectTextarea,
      },
    ];

    let hasInvalid = false;

    fields.forEach((field) => {
      if (!field.valid) {
        hasInvalid = true;
        field.setCorrect(false);
      } else {
        field.setCorrect(true);
      }
    });

    const firstFocusElement = fields.find((field) => !field.valid);
    if (firstFocusElement?.ref.current) {
      firstFocusElement?.ref.current.focus();
    }

    if (!hasInvalid) {
      setModalSendler(true);
      setName("");
      setEmail("");
      setPhone("");
      setTextarea("");
      setNameValid(false);
      setEmailValid(false);
      setTextareaValid(false);
    } else {
      setModalSendler(false);
    }
  };

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeName(e, setName, setNameValid);
    },
    [setName, setNameValid]
  );

  const handleChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeEmail(e, setEmail, setEmailValid);
    },
    [setEmail, setEmailValid]
  );

  const handleChangePhone = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changePhone(e, setPhone, setPhoneValid);
    },
    [setPhone, setPhoneValid]
  );

  const handleChangeTextarea = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      changeTextarea(e, setTextarea, setTextareaValid);
    },
    [setTextarea, setTextareaValid]
  );

  const classNameRequired = <span style={{ color: "red" }}> *</span>;

  const classNameInputName = !nameValid && name ? true : false;

  const classNameInputEmail = !emailValid && email ? true : false;

  const classNameInputPhone = !phoneValid && phone ? true : false;

  const classNameTextarea = !textareaValid && textarea ? true : false;

  const incorrectNameMessage = !correctName && (
    <div className={styles["contacts-form__incorrect"]}>
      Invalid Name. Please enter 2-30 letters only.
    </div>
  );

  const incorrectEmailMessage = !correctEmail && (
    <div className={styles["contacts-form__incorrect"]}>
      Invalid email address. Please enter a valid email.
    </div>
  );

  const incorrectTextareaMessage = !correctTextarea && (
    <div className={styles["contacts-form__incorrect"]}>
      Invalid message. Please enter between 2 and 500 characters.
    </div>
  );

  const handlerCloseModal = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      setModalSendler(false);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles["contacts-form"]}>
      <div className={styles["contacts-form__text"]}>
        <p>We love hearing from you, our Shop customers.</p>
        <p>
          Please contact us and we will make sure to get back to you as soon as
          we possibly can.
        </p>
      </div>

      <div className={styles["contacts-form__inputs"]}>
        <div className={styles["contacts-form__input-box"]}>
          <FormField label="Your Name">
            {classNameRequired}
            <Input
              onChange={handleChangeName}
              value={name}
              ref={nameRef}
              className={classNameInputName}
              name="name"
              type="text"
              placeholder="Your Name"
            />
          </FormField>
          {incorrectNameMessage}
        </div>

        <div className={styles["contacts-form__input-box"]}>
          <FormField label="Your Email">
            {classNameRequired}
            <Input
              onChange={handleChangeEmail}
              value={email}
              ref={emailRef}
              className={classNameInputEmail}
              name="email"
              type="email"
              placeholder="Your Email"
            />
          </FormField>
          {incorrectEmailMessage}
        </div>

        <div className={styles["contacts-form__input-box"]}>
          <FormField label="Your Phone Number">
            <Input
              onChange={handleChangePhone}
              value={phone}
              ref={phoneRef}
              className={classNameInputPhone}
              name="phone"
              type="number"
              placeholder="Your Phone"
            />
          </FormField>
        </div>
      </div>

      <FormField label="What’s on your mind?">
        {classNameRequired}
        <Textarea
          onChange={handleChangeTextarea}
          value={textarea}
          ref={textareaRef}
          className={classNameTextarea}
          name="textarea"
          placeholder="Jot us a note and we’ll get back to you as quickly as possible"
        />
      </FormField>
      {incorrectTextareaMessage}

      <Button type="submit">Submit</Button>

      {modalSendler && (
        <div
          ref={modalRef}
          className={styles["modal-sendler"]}
          onClick={(e) => handlerCloseModal(e)}
        >
          <div className={styles["modal-sendler__box"]}>
            <IoClose
              className={styles["modal-sendler__close"]}
              onClick={() => setModalSendler(false)}
            />
            <p className={styles["modal-sendler__text"]}>Message Send</p>
            <p className={styles["modal-sendler__text-thanks"]}>
              Thank you for your message!
            </p>
          </div>
        </div>
      )}
    </form>
  );
}

export default ContactsForm;
