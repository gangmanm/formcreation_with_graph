import React, { useState } from "react";
import styles from "../css/FormQuestion.module.css";
import CheckBox from "./CheckBox";
function FormQuestion() {
  const [title, setTitle] = useState();
  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.quesBody}>
      <input
        type="text"
        value={title}
        placeholder="질문 제목을 입력하세요"
        onChange={onChangeInput}
        className={styles.titleField}
      />
      <CheckBox />
    </div>
  );
}

export default FormQuestion;
