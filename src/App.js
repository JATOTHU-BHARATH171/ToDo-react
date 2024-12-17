import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
 import { Container, Row, Col, Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";

let App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  let addItem = () => {
    if (userInput.trim()) {
      setList([...list, userInput]);
      setUserInput("");
    }
  };
  let deleteItem = (index) => {
    const updatedList = list.filter((_,i ) => i!== index);
    setList(updatedList);
  };

  let editItem = (index) => {
    const editedValue = prompt("Edit your todo:", list[index]);
    if (editedValue && editedValue.trim()) {
      const updatedList = [list];
      updatedList[index] = editedValue;
      setList(updatedList);
    }
  };

  return (
    <Container className="todo-container">
      <Row className="header-row">
        <h2>TODO APP</h2>
      </Row>
      <hr />
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter name..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Button variant="dark" onClick={addItem }>ADD +</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span:5 , offset: 2}}>
          <ListGroup>
            {list.map((item, index) => (
              <ListGroup.Item key={index}>{item}
              <div>
              <Button variant="light" onClick={() => editItem(index)}>Modify</Button>
              <Button variant="danger" onClick={() => deleteItem(index)}>Delete</Button>
                </div></ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
