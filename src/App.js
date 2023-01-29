import React from "react";
import styled from "styled-components";

class App extends React.Component {
  state = {
    query: ""
  };
  render() {
    return (
    <Container>
       <Input 
       placeholder="인원 수를 입력하세요(자신 포함)"
       onKeyPress={this.handleInputKeyPress}
       ></Input>
    </Container>
    );
  }

  handleInputKeyPress = event => {
    if (event.key === "Enter") {
      this.setState({
        query: event.target.value
      });
      event.target.value = "";
    }
  };
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 1) 25%,
      rgba(20, 20, 20, 0.5) 75%,
      rgba(20, 20, 20, 1)
    ),
  url(https://images.unsplash.com/photo-1661114544971-0aee18c148d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80);
  background-size: cover;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 60px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;

export default App;