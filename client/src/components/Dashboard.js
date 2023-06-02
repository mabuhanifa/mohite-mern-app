import React from "react";
import { Toaster } from "react-hot-toast";
import { useGetTasksQuery } from "../redux/slices/apiSlice";
import Task from "./Task";

export default function Dashboard() {
  const { data: tasks, isError, isLoading, isSuccess } = useGetTasksQuery();
  return (
    <div>
      <Toaster />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error...</h1>}
      <div>
        {isSuccess && tasks.map((task) => <Task key={task._id} task={task} />)}
      </div>
    </div>
  );
}
