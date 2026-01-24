import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  // useEffect() é usado para executar código sempre que o State for alterado: Ele recebe dois parâmetros: Função (código) e Lista (State)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect() possuindo lista vazia só será executado uma vez, e essa única vez é quando ele acessa pela primeira vez

  /*
  // Esse useEffect() é para chamar dados teste de uma API (opcional)
  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" },
      );

      const data = await response.json(); // Converte para JSON

      setTasks(data);
    }

    fetchTasks();
  }, []);
  */

  function onTaskClick(taskId) {
    const newTasks = tasks.map((tasks) => {
      if (tasks.id === taskId) {
        return { ...tasks, isCompleted: !tasks.isCompleted };
      }

      return tasks;
    });

    setTasks(newTasks); // Atualiza o State
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((tasks) => tasks.id !== taskId);

    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    if (taskToEdit) {
      const newTask = tasks.map(task =>
        task.id == taskToEdit.id ? { ...task, title: title, description: description } : task,
      );
      setTasks(newTask);
      setTaskToEdit(null)
    } else {
      const newTask = {
        id: v4(),
        title: title,
        description: description,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
    }
  }

  function onEditTaskClick(task) {
    setTaskToEdit(task);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>

        <AddTasks onAddTask={onAddTask} taskToEdit={taskToEdit} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onEditTaskClick={onEditTaskClick}
          onDeleteTask={onDeleteTask}
        />
        {/*Passamos os argumentos que são os props. São chamados simplesmente de props*/}
      </div>
    </div>
  );
}

export default App;

// Colocamos JavaScript dentro do "HTML" usando as chaves

// States servem para definir um estado padrão que pode ser alterado, e quando alterado, ele executa o return novamente atualizando a interface. Bom para interações com o usuário

// Funções criadas no App tem acesso ao State
