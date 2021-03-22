import React from "react";
import styled from "styled-components";

const PeopleCount = props => {
  const { count, handleCount } = props;
  return (
    <StyledWrap>
      <button onClick={() => handleCount("decrease")}>-</button>
      <div>{count}</div>
      <button onClick={() => handleCount("increase")}>+</button>
    </StyledWrap>
  );
};

export default PeopleCount;

const StyledWrap = styled.div`
  display: flex;
  > button {
    display: flex;
    align-items:center;
    justify-content:center;
    width: 30px;
    height: 30px;
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    background-color: beige;
    transition: background-color 0.2s;
    &:hover {
      background-color: bisque;
    }
  }
  > div {
    display: flex;
    align-items:center;
    font-size: 1.4rem;
    padding: 0 10px;
  }
`;
