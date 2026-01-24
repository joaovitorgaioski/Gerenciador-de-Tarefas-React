import { useState, useEffect } from "react";
import Input from "./Input";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (props.taskToEdit){
      setTitle(props.taskToEdit.title)
      setDescription(props.taskToEdit.description)
    }
  }, [props.taskToEdit])

  return (
    <div className="space-y-4 bg-slate-200 rounded-md shadow flex flex-col p-4">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição!");
          }
          props.onAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        {props.taskToEdit ? 'Editar' : 'Adicionar'}
      </button>
    </div>
  );
}

export default AddTask;

// Existem algumas formas de obter valores de input no React, uma delas é usando State
