import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { VscTrash } from "react-icons/vsc";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function Task({ task }) {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <div>
        {modal && <EditModal view={modal} setModal={setModal} task={task} />}
        {deleteModal && (
          <DeleteModal
            view={deleteModal}
            setModal={setDeleteModal}
            id={task._id}
          />
        )}
      </div>
      <div className="p-3 shad my-2 rounded w-96">
        <p className="truncate text-xl font-bold my-3 text-black">{task.title}</p>
        <p className="truncate text-lg">{task.description}</p>
        <div className="my-3">
          <p>
            Status: <span className="font-semibold text-sm">{task.status.toUpperCase() }</span>
          </p>
        </div>
        <div className="flex flex-col gap-y-1 text-[12px]">
          <div className="flex items-center">
            <span>Created At : </span>
            <span className="text-gray-400 ml-2">
              {task.createdAt.substring(0, 10)}
            </span>
          </div>
          <div className="flex items-center ">
            <span>Done By : </span>
            <span className="text-gray-400 ml-2">
              {task.date}
            </span>
          </div>
        </div>
        <div className="flex justify-around mt-5">
          <button
            className=" text-red-600"
            onClick={() => setDeleteModal(true)}
          >
            <VscTrash size={20} />
          </button>
          <button className=" text-green-600" onClick={() => setModal(true)}>
            <CiEdit size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
