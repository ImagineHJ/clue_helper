import React from "react";
import styled from "styled-components";
import Board from "./Board";

function ClueHelper() {
  return (
    <Container>
      <Board></Board>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default ClueHelper;