import React, { useState } from "react";
import styles from "../css/FormCreation.module.css";
import FormQuestion from "./FormQuestion";
import { ReactComponent as PlusIcon } from "../img/PlusIcon.svg";
import styled from "styled-components";

const FormMain = styled.div`
  background: grey;
  width: 100%;
  height: 100%;
`;
const PlusDiv = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`;

const StyledPlusIcon = styled(PlusIcon)`
  width: 2rem;
  height: 2rem;
  display: inline;
  margin-top: 3rem;
`;

const TitleInput = styled.div`
  width: 20em;
  height: 5em;
  font-size: 2em;
  margin: auto;
  display: block;
  padding-top: 2em;
`;
function QstCreation() {}

function FormCreation() {
  const [title, setTitle] = useState();
  const [type, setType] = useState();
  const [countList, setCountList] = useState([0]);

  const onChangeInput = (e) => {
    setTitle(e.target.value);
  };

  const onAddDetailDiv = () => {
    let countArr = [...countList];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter); // index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    setCountList(countArr);
  };

  return (
    <FormMain>
      <TitleInput>
        <input
          type="text"
          value={title}
          placeholder="설문 제목을 입력하세요"
          onChange={onChangeInput}
          className={styles.titleField}
        />
      </TitleInput>
      <FormQuestion countList={countList} />
      <PlusDiv>
        <StyledPlusIcon onClick={onAddDetailDiv} />
      </PlusDiv>
    </FormMain>
  );
}

export default FormCreation;
