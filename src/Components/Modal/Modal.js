import React from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";

import ButtonAdd from "../ButtonAdd";
import styles from "./Modal.module.css";

import rates from "../../Config/rates.json";

function Modal({ open, setOpen, rateId, setRateId }) {
  const [show, setShow] = React.useState(false);
  const [mail, setMail] = React.useState("");
  const [invalid, setInvalid] = React.useState(true);

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const success = `Успех! Проверьте ваш почтовый ящик ${mail} для получения ключа доступа!`;
  const unsuccess = `Введённый вами email некорректен!!!`;

  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }

  function setEmail(e) {
    setMail(e.target.value);
  }

  function closeModal() {
    setShow(false);
    setMail("");
    setRateId(1);
    setOpen(false);
  }

  function checkEmail(e) {
    e.preventDefault();
    const variant = rates.filter((rate) => rate.id === rateId);
    if (isEmailValid(mail)) {
      emailjs
        .send(
          "service_t3mtqxy",
          "template_kz19cyd",
          {
            mailto: mail,
            message: `${variant[0].price}`,
          },
          "UlPgQ96Acqs9FSPUQ"
        )
        .then(
          function (responce) {
            console.log("SUCCESS!", responce.status, responce.text);
          },
          function (error) {
            console.log("FAILED!", error);
          }
        );
      setInvalid(false);
      setShow(true);
      setTimeout(() => {
        setOpen(false);
        setShow(false);
        setMail("");
        setInvalid(true);
        setRateId(1);
      }, 4000);
    } else {
      setInvalid(true);
      setShow(true);
    }
  }

  return (
    <React.Fragment>
      {open && (
        <div className={styles.modal}>
          <div className={styles.modal_body}>
            <h2>Получение ключа доступа к OutlineVPN</h2>
            <div className={styles.instruction}>
              <p>
                Для получения ключа доступа просто укажите свой e-mail адрес
                ниже и нажмите кнопку <b>Получить ключ</b>.
              </p>
              <p>
                Указывайте свой <b>реальный</b> почтовый адрес, так как именно
                на него вам будет отправлен ключ доступа!
              </p>
              <p>
                Пробный ключ сроком действия на 7 дней может быть получен только
                один раз.
              </p>
            </div>

            <form
              className={[
                !invalid ? styles.disabled : undefined,
                styles.form,
              ].join(" ")}
              onSubmit={(e) => checkEmail(e)}
            >
              <div className={styles.radios}>
                {rates.map((rate) => (
                  <div className={styles.radiogroup} key={rate.id}>
                    <input
                      className={styles.radio}
                      id={rate.id}
                      defaultChecked={rate.id === rateId}
                      value={rate.id}
                      name="rates"
                      type="radio"
                      onChange={() => setRateId(rate.id)}
                    />
                    <label htmlFor={rate.id}>{rate.price}</label>
                  </div>
                ))}
              </div>

              <input
                type="email"
                name="email"
                placeholder="e-mail"
                onChange={(e) => setEmail(e)}
                className={styles.input}
              />
              <ButtonAdd big={false} text="Получить&nbsp;ключ" />
            </form>

            <div
              className={[!show ? styles.invis : undefined, styles.sent].join(
                " "
              )}
            >
              <b>{invalid ? unsuccess : success}</b>
            </div>
          </div>
          <button className={styles.closeButton} onClick={() => closeModal()}>
            &times;
          </button>
        </div>
      )}
    </React.Fragment>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  rateId: PropTypes.number.isRequired,
  setRateId: PropTypes.func.isRequired,
};

export default Modal;
