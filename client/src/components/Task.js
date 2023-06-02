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
    <div className="p-3 shad my-2 h-52 rounded flex flex-col justify-between lg:flex-row lg:items-center gap-x-5 2xl:gap-x-10 relative lg:h-20 w-full">
      <p className="truncate lg:w-40 text-lg font-bold">{task.title}</p>

      <p className="lg:w-96 truncate ">{task.description}</p>
      <div className="flex items-center">
        <span className="text-sm">Created At :</span>
        <span className="text-gray-400 ml-2 text-xs font-semibold">
          {task.createdAt.substring(0, 10)}
        </span>
      </div>

      <div className="flex items-center">
        <span className="text-sm">Pending At :</span>{" "}
        <span className="text-gray-400 ml-2 text-xs font-semibold mr-28 ">
          {task.date}
        </span>
      </div>

      <div className="lg:absolute top-14 lg:top-5 right-0">
        <button
          className="lg:px-5 py-2 text-red-600 mr-5 lg:mr-0"
          onClick={handleDelete}
        >
          <VscTrash size={20} />
        </button>
        <button className="lg:px-5 py-2 text-green-600">
          <CiEdit size={20} />
        </button>
      </div>
    </div>
  );
}