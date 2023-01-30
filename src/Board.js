import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

function Board() {
  return (
    <Container>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
    </Container>
  );
}

const Container = styled.div`
  top : 60px;
  left : 60px;
  width: 65%;
  height: 100%;
  border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(10, 1fr);
`;

export default Board;