import React, { useState } from "react";
import styles from "../css/FormCreation.module.css";

function FormCreation() {
  const [title, setTitle] = useState();
  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <div className={styles.fm}>
        <input
          type="text"
          value={title}
          placeholder="입력하세요"
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
}

export default FormCreation;
