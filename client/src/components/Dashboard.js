import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../redux/slices/apiSlice";
import Task from "./Task";

export default function Dashboard() {
  const { data: tasks, isError, isLoading, isSuccess } = useGetTasksQuery();
  const { filter } = useSelector((state) => state.tasks);
  return (
    <div>
      <Toaster />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error...</h1>}
      <div>
        {isSuccess &&
          tasks
            .filter((task) =>
              task.title.toLowerCase().includes(filter.toLowerCase())
            )
            .map((task) => <Task key={task._id} task={task} />)}
      </div>
    </div>
  );
}
