import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PeopleCount from "./components/PeopleCount";
import PeopleInputs from "./components/PeopleInputs";

const App = () => {
  const initailCount = 2;
  const [count, setCount] = useState(initailCount);
  const [inputs, setInputs] = useState([]);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    inputReset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCount = type => {
    if (type === "increase") {
      setCount(prev => prev + 1);
      setInputs([...inputs, ""]);
    } else if (type === "decrease") {
      if (count > initailCount) {
        setCount(prev => prev - 1);
        inputs.pop()
        setInputs([...inputs]);
      }
    }
  };

  const inputReset = () => {
    const initialArray = [];
    for (let i = 0; i < count; i++) {
      initialArray.push("");
    }
    setInputs(initialArray);
  }

  const startGame = () => {
    if(inputs.indexOf("") !== -1) {
      alert("빈 칸을 모두 채워주세요.")
      return
    }
    const randomNum = Math.floor(Math.random() * count);
    setIsStart(true)

    setTimeout(() => {
      alert(`당첨자는 ${inputs[randomNum]}입니다.`)
      setIsStart(false)
    }, 2000)
  }

  return (
    <StyledWrap>
      <PeopleCount count={count} handleCount={handleCount} />
      <p>최소 값은 2입니다.</p>
      <PeopleInputs inputs={inputs} setInputs={setInputs} />

      {isStart ? <div className="blink">결과를 기대해주세요.</div> :
      <div className="buttons">
       <button onClick={startGame}>룰렛 시작</button>
      <button onClick={inputReset}>리셋</button>
      </div>
}
    </StyledWrap>
  );
};

export default App;

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .buttons {
    button {
      background-color: beige;
      outline: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      padding: 5px 10px;
      margin: 0 5px;
    }
  }

  > p {
    font-size: 0.7rem;
    color: #666666;
  }

  .blink {
    animation: blink 0.6s infinite;
  }


  @keyframes blink {
    0% {
      color: black;
    }
    100% {
      color: red;
    }
  }
`;
