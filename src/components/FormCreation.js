import React, { useState } from "react";
import styles from "../css/FormCreation.module.css";
import FormQuestion from "./FormQuestion";

function FormCreation() {
  const [title, setTitle] = useState();
  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className={styles.fm}>
      <div clasName={styles.titleInput}>
        <input
          type="text"
          value={title}
          placeholder="설문 제목을 입력하세요"
          onChange={onChangeInput}
          className={styles.titleField}
        />
        <FormQuestion />
      </div>
    </div>
  );
}

export default FormCreation;
