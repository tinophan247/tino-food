import { useDispatch, useSelector } from "react-redux";
import Check from "./Checkbox/Checkbox";
import TextFields from "./TextField/TextField";
import { useState } from "react";
import { todolistAction } from "../rtk/slices/todolistSlice";

function Test2() {
  const [task, setTask] = useState("");
  const {todolist} = useSelector((store) => store.todolist);
  const dispatch = useDispatch();
  console.log("todolist", todolist);

  const handleAdd = () => {
    dispatch(todolistAction.addTodolist(task));
    setTask("");
  };

  const handleDelete = (index) => {
    dispatch(todolistAction.deleteTodolist(index))
  }

  return (
    <div className="flex justify-center">
      <div>
        <div className="flex">
          <TextFields
            name="todolist"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="w-10 h-10 text-white bg-blue-500 rounded-xl mx-5 mt-8"
          >
            Add
          </button>
        </div>
        <div>
          {todolist.length > 0 &&
            todolist.map((item, index) => (
              <div
                key={index}
                className="flex bg-slate-100 w-[300px] h-14  justify-around items-center"
              >
                <p>{item}</p>
                <Check />
                <button onClick={() => handleDelete(index)} className="w-14 h-8 text-white bg-red-500 ">
                  Delete
                </button>
              </div>
            ))}
            {todolist.length === 0 && (
                 <div
                 className="flex bg-slate-100 w-[300px] h-14  justify-around items-center"
               >
                 <p>Chưa có task nào cả</p>
               </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Test2;
