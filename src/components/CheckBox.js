import React from "react";
import styles from "../css/CheckBox.module.css";
function CheckBox() {
  return (
    <>
      <div className={styles.typeSelect}>
        <select>
          <option>객관식 </option>
          <option>주관식 </option>
          <option>찬부식 </option>
        </select>
      </div>

      <div></div>
    </>
  );
}

export default CheckBox;
