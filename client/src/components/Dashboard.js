import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/task");
      const data = await response.json();
      setTasks(data.data.tasks);
    };
    fetchData();
  }, []);
  return <div>

    <div>
      {
        tasks && tasks.map((task) => (
          <div key={task._id}>
            <h1>{task.description}</h1>
            <p>data:{task.createdAt.substring(0, 10)}</p>
          </div>
        ))
      }
    </div>
    


  </div>;
}
