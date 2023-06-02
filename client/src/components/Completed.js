import React from "react";
import { Toaster } from "react-hot-toast";
import { useGetTasksQuery } from "../redux/slices/apiSlice";
import Task from "./Task";

export default function Completed() {
  const { data: tasks, isError, isLoading, isSuccess } = useGetTasksQuery();
  return (
    <div>
      <Toaster />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error...</h1>}
      <div className="flex gap-1 flex-wrap justify-center">
        {isSuccess &&
          tasks
            .filter((task) => task.status === "completed")
            .map((task) => <Task key={task._id} task={task} />)}
      </div>
    </div>
  );
}
