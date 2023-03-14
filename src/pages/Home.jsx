import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";
import styled from "styled-components"

const Copy = styled.footer`
    margin-top: 20rem;
    padding-bottom: 1rem;
    text-align: center;
    font-family: Verdana;
    font-style: italic;
    color: white;
`

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, editedText) => {
    let todosArray = [...todos]

    for (let i in todosArray) {
      if (todosArray[i].id === id) {
        todosArray[i].text = editedText;
      }
    }

    setTodos(todosArray);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo}/>
      
      <List
        sx={{
          marginTop: "1em",
        }}
      >
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <TodoItem
              editTodo={editTodo}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          </div>
        ))}
      </List>
      <Copy>© Daniel Roger Nitter</Copy>
    </Container>

  );
}
