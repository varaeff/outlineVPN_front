import React from "react";
import ButtonAdd from "../ButtonAdd";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

function Modal({ bigbtn }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <ButtonAdd
        big={bigbtn}
        text="Подключить&nbsp;ВПН"
        clicking={() => setOpen(true)}
      />

      {open && (
        <div className={styles.modal}>
          <div className={styles.modal_body}>
            <h2>Some modal window</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              nobis cum adipisci laborum repellat!
            </p>
            <ButtonAdd
              big={false}
              text="Получить&nbsp;ключ"
              clicking={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

Modal.propTypes = {
  bigbtn: PropTypes.bool,
};

export default Modal;
