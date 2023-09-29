import { useState } from "react";
import Carousel from "../components/Carousel";
import HomeProduct from "../components/HomeProduct";
import Pagelayout from "../components/Pagelayout";
import TextFields from "../components/TextField/TextField";

function HomePage() {
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);

  const handleAdd = () => {
    setListTask([...listTask,task])
  }

  return (
    <Pagelayout>
      <Carousel />
      <HomeProduct/>
      <div className="flex justify-center gap-5">
        <TextFields name={'Test'} value={task} onChange={(e)=> setTask(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      {
        listTask.length > 0 && listTask.map((item,index) => (
          <p key={index} className="text-center">{item}</p>
        ))
      }
    </Pagelayout>
  );
}

export default HomePage;
