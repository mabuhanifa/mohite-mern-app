import React from "react";
import { CiEdit } from "react-icons/ci";
import { VscTrash } from "react-icons/vsc";
import { useDeleteTaskMutation } from "../redux/slices/apiSlice";

export default function Task({ task }) {
  const [deleteTask] = useDeleteTaskMutation();
  const handleDelete = async () => {
    const res = await deleteTask(task._id);
    console.log(res);
  };
  return (
    <div className="p-3 shad my-2 h-52 rounded flex flex-col justify-between md:flex-row md:items-center gap-x-20 relative md:h-20 w-full">
      <p className="truncate md:w-40 text-lg font-bold">{task.title}</p>

      <p className="md:w-96 truncate ">Description : {task.description}</p>
      <p className="text-sm">
        Created At :
        <span className="text-gray-400 ml-2 text-xs font-semibold">
          {task.createdAt.substring(0, 10)}
        </span>
      </p>
      <p className="mr-40 text-sm">
        Pending Time :
        <span className="text-gray-400 ml-2 text-xs font-semibold">{task.date}</span>
      </p>
      <div className="md:absolute top-14 md:top-5 right-0">
        <button
          className="md:px-5 py-2 text-red-600 mr-5 md:mr-0"
          onClick={handleDelete}
        >
          <VscTrash size={20} />
        </button>
        <button className="md:px-5 py-2 text-green-600">
          <CiEdit size={20} />
        </button>
      </div>
    </div>
  );
}
