import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";

export default function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
    document.getElementById("filled-basic").value = null;
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TextField
          id="filled-basic"
          label="Digite a sua tarefa"
          variant="filled"
          onChange={(e) => setText(e.target.value)}
          fullWidth
          required="required"
        />
        <Button
          id="button"
          variant="text"
          onClick={() => todoCreate(text)}
        >
          Add
        </Button>
      </div>
    </Paper>
  );
}
