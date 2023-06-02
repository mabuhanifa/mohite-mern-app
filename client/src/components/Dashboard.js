import React from "react";
import { Toaster } from "react-hot-toast";
import { useGetTasksQuery } from "../redux/slices/apiSlice";

export default function Dashboard() {
  const { data: tasks, isError, isLoading, isSuccess } = useGetTasksQuery();

  console.log(tasks);

  return (
    <div>
      <Toaster />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error...</h1>}
      <div>
        {isSuccess &&
          tasks.map((task) => (
            <div key={task._id}>
              <h1>{task.description}</h1>
              <p>data:{task.createdAt.substring(0, 10)}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
