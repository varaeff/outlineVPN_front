import React from "react";
import ButtonAdd from "../ButtonAdd";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

function Modal({ bigbtn }) {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [male, setMale] = React.useState("");
  const [invalid, setInvalid] = React.useState(true);

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const success = `Успех! Проверьте ваш почтовый ящик ${male} для получения ключа доступа!`;
  const unsuccess = "Введённый вами email некорректен!!!";

  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }

  function setEmail(e) {
    setMale(e.target.value);
  }

  function closeModal() {
    setShow(false);
    setMale("");
    setOpen(false);
  }

  function checkEmail(e) {
    e.preventDefault();
    if (isEmailValid(male)) {
      setInvalid(false);
      setShow(true);
      setTimeout(() => {
        setOpen(false);
        setShow(false);
        setMale("");
        setInvalid(true);
      }, 4000);
    } else {
      setInvalid(true);
      setShow(true);
    }
  }

  return (
    <React.Fragment>
      <ButtonAdd
        big={bigbtn}
        text="Подключить&nbsp;ВПН"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className={styles.modal}>
          <div className={styles.modal_body}>
            <h2>Получение ключа доступа к OutlineVPN</h2>
            <div className={styles.instruction}>
              <p>
                Для получения пробного ключа доступа просто укажите свой e-mail
                адрес ниже и нажмите кнопку <b>Получить ключ</b>.
                <br />
                <b>Внимание!!!</b>
                <br />
                Указывайте свой <b>реальный</b> почтовый адрес, так как именно
                на него вам будет отправлен ключ доступа!
                <br />
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
  bigbtn: PropTypes.bool,
};

export default Modal;
