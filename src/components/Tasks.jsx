import { ChevronRightIcon, Edit, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    // Esse query serve mais para questões de segurança
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 bg-slate-200 p-4 rounded-md shadow">
      {props.tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${tasks.isCompleted && "line-through"}`}
            onClick={() => props.onTaskClick(tasks.id)}
          >
            {tasks.title}
          </button>

          <Button
            onClick={() => {
              onSeeDetailsClick(tasks);
            }}
          >
            <ChevronRightIcon />
          </Button>

          <Button
            onClick={() => {
              props.onEditTaskClick(tasks);
            }}
          >
            <Edit />
          </Button>

          <Button
            onClick={() => {
              props.onDeleteTask(tasks.id);
            }}
          >
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
