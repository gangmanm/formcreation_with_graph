import React from "react";
import styles from "../css/CheckBox.module.css";

function Checkbox({ children, disabled, checked, onChange }) {
  return (
    <label className={styles.checkBox}>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  );
}

function CheckBox() {
  const [service, setService] = React.useState(false);
  return (
    <>
      <Checkbox checked={service} onChange={setService}>
        좋아요
      </Checkbox>
      <Checkbox checked={service} onChange={setService}>
        아니요
      </Checkbox>
      <Checkbox checked={service} onChange={setService}>
        나쁘다
      </Checkbox>
    </>
  );
}

export default CheckBox;
