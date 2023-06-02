import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDeleteTaskMutation } from "../redux/slices/apiSlice";

export default function DeleteModal({ view, setModal, id }) {
  const [deleteTask] = useDeleteTaskMutation();
  if (!view) {
    return null;
  }
  const closeModal = (e) => {
    if (e.target.id === "container") {
      setModal((m) => !m);
    }
  };
  const handleDelete = async () => {
    const res = await deleteTask(id);
    if (res.data.deletedCount === 1) {
      toast.success("Task Deleted Successfully");
      setModal((m) => !m);
    }
  };
  return (
    <>
      <Toaster />
      <div
        id="container"
        className="bg-opacity-30 backdrop-blur-lg fixed inset-0 z-20 py-10 flex justify-center items-center"
        onClick={closeModal}
      >
        <div className="shad p-10 rounded-lg">
          <h1 className="my-10">Are you sure you want to delete this task</h1>
          <div>
            <button
              className="text-white font-bold px-10 py-2 bg-red-500"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="text-white font-bold px-10 mx-10 py-2 bg-gray-500"
              onClick={() => setModal((m) => !m)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
