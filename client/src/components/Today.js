import React from "react";
import { Toaster } from "react-hot-toast";
import { useGetTasksQuery } from "../redux/slices/apiSlice";
import Task from "./Task";

export default function Today() {
  const { data: tasks, isError, isLoading, isSuccess } = useGetTasksQuery();
  const date = new Date();
  const today = date.toISOString().substring(0, 10);
  return (
    <div>
      <Toaster />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error...</h1>}
      <div>
        {isSuccess &&
          tasks
            .filter((task) => task.date === today)
            .map((task) => <Task key={task._id} task={task} />)}
      </div>
    </div>
  );
}
