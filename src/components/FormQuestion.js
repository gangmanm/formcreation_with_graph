import React, { useState } from "react";
import styles from "../css/FormQuestion.module.css";
import CheckBox from "./CheckBox";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../img/PlusIcon.svg";

const qstInfo = {
  qstId: "",
  qstType: "radio",
  qstTitle: "",
  qstImg: "",
  anonymous: true,
  essential: true,
  branch: false,
  branchCont: {
    branchOst: "",
    branchOpt: [],
  },
};
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

const MainFrame = styled.div`
  display: block;
  margin: auto;
  width: 50em;
  height: 10em;
  background: #f8f8f8;
  border: 1px solid #21296b;
  border-radius: 28px;
  margin-bottom: 3em;
`;

const QuesTitle = styled.input`
  display: inline;
  width: 30rem;
  height: 2rem;
  margin: 1rem 1rem;
`;

const TypeSelect = styled.div`
  display: inline-block;
`;
function FormQuestion(props) {
  const [title, setTitle] = useState();
  const [id, setId] = useState(0);
  let [count, setCount] = useState(0);
  const [qstBox, newQstBox] = useState([
    {
      qst: {
        qstId: 1,
        qstType: "radio",
        qstTitle: "제목 없는 설문",
        anonymous: false,
        essential: false,
        branch: false,
        branchCont: {
          branchOst: "",
          branchOpt: [],
        },
      },
    },
  ]);

  const [qstInfo, setQstInfo] = useState({
    qst: {
      qstId: 0,
      qstType: "radio",
      qstTitle: "제목 없는 설문",
      anonymous: false,
      essential: false,
      branch: false,
      branchCont: {
        branchOst: "",
        branchOpt: [],
      },
    },
  });

  const handleClick = (setValue) => {
    let key = Object.keys(setValue)[0];
    let id = Object.keys(setValue)[1];
    let value = Object.values(setValue)[0];
    let idValue = Object.values(setValue)[1];
    setQstInfo({
      ...qstInfo,
      qst: {
        ...qstInfo.qst,
        [key]: value,
        [id]: idValue,
      },
    });
  };

  const IdChange = (currentId) => {
    setId(currentId);
    console.log(JSON.stringify(id));
  };

  const SaveToArray = (e) => {
    e.preventDefault();
    let count = 0;
    qstBox.map((data) => {
      if (data.qst.qstId == id) {
        qstBox[id] = qstInfo;
        count++;
      }
    });
    if (count == 0) {
      newQstBox([...qstBox, qstInfo]);
      if (id == 0) {
        newQstBox([qstInfo]);
      }
    }
    console.log(JSON.parse(JSON.stringify(qstBox)));
  };

  return (
    <>
      {props.countList &&
        props.countList.map((item, i) => (
          <>
            <MainFrame
              onClick={(e) => {
                IdChange(item);
              }}
            >
              <QuesTitle
                type="text"
                value={qstInfo.qstTitle}
                placeholder="질문 제목을 입력하세요"
                onChange={(e) => {
                  handleClick({ qstTitle: e.target.value, qstId: item });
                  console.log(JSON.stringify(qstInfo));
                }}
                className={styles.titleField}
              />
              <TypeSelect>
                <select>
                  <option id="checkBox">객관식 </option>
                  <option>주관식 </option>
                  <option>찬부식 </option>
                </select>
              </TypeSelect>
              <button onClick={SaveToArray}>저장</button>
            </MainFrame>
          </>
        ))}
    </>
  );
}

export default FormQuestion;
