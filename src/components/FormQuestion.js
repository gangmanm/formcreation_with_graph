import React from "react";
import styles from "../css/FormQuestion.module.css";
import CheckBox from "./CheckBox";
function FormQuestion() {
  return (
    <div className={styles.quesBody}>
      <CheckBox />
    </div>
  );
}

export default FormQuestion;
