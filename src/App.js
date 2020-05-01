import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './chat/index';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container >
      <Row>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>My Chat App</h3>
      </Row>
      <Row>
        <Chat />
      </Row>
    </Container>
  );
}

export default App;
