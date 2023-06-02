import React from "react";
import { VscTrash } from "react-icons/vsc";
import { useDeleteTaskMutation } from "../redux/slices/apiSlice";

export default function Task({ task }) {
  const [deleteTask] = useDeleteTaskMutation();
  const handleDelete = async () => {
    const res = await deleteTask(task._id);
    console.log(res);
  };
  return (
    <div className="p-5 shad my-2 rounded flex items-center gap-x-5 relative w-full">
      <p>{task.title}</p>
      <p>data:{task.createdAt.substring(0, 10)}</p>
      <p>id:{task._id}</p>
      <button
        className="px-5 py-2 text-red-600 absolute right-0"
        onClick={handleDelete}
      >
        <VscTrash />
      </button>
    </div>
  );
}
