import React from "react";
import styled from "styled-components";

const PeopleInputs = props => {
  const { inputs, setInputs } = props;

  const handleInput = (i, e) => {
    const newInputs = [...inputs];
    newInputs[i] = e.target.value;
    setInputs(newInputs);
  };
  return (
    <InputWrap>
      {inputs.map((input, i) => (
        <input key={i} value={input} onChange={e => handleInput(i, e)} type="text" />
      ))}
    </InputWrap>
  );
};

export default PeopleInputs;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 500px;
  > input {
    padding: 5px;
    margin: 5px;
    font-size: 1rem;
    width: 100px;
    text-align:center;
  }
`;
