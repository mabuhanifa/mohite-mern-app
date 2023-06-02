import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { VscChromeClose } from "react-icons/vsc";
import { useAddTaskMutation } from "../redux/slices/apiSlice";

export default function EditModal({ view, setModal, task }) {
  const [selectedOption, setSelectedOption] = useState("pending");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [addTask] = useAddTaskMutation();

  const options = [
    { value: "completed", label: "Completed" },
    { value: "pending", label: "Pending" },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  if (!view) {
    return null;
  }

  const closeModal = (e) => {
    if (e.target.id === "container") {
      setModal((m) => !m);
    }
  };

  const createTodo = (e) => {
    e.preventDefault();
    addTask({
      title,
      description,
      status: selectedOption,
      date,
    }).then((res) => {
      if (res.data.status === "success") {
        toast.success("Task added successfully", { duration: 2500 });
        setTimeout(() => {
          setModal((m) => !m);
        }, 1000);
      }
    });
  };
  return (
    <>
      <Toaster />
      <div
        id="container"
        className="bg-opacity-30 backdrop-blur-lg fixed inset-0 flex justify-center z-20 py-10"
        onClick={closeModal}
      >
        <div className="max-w-2xl rounded-xl p-10 relative shad h-max">
          <h1 className="text-2xl font-bold mb-10">Create a new Todo</h1>
          <button
            className=" text-red-500 absolute top-2 right-2 bg-red-200 p-2 rounded-full hover:bg-red-300"
            onClick={() => setModal((m) => !m)}
          >
            <VscChromeClose className="text-xl" />
          </button>
          <div>
            <form>
              <input
                type="text"
                placeholder="Title"
                className="p-2 bg-slate-200 w-96"
                onChange={(e) => setTitle(e.target.value)}
                required
                value={task.title}
              />
              <br />
              <textarea
                type="text"
                placeholder="Description"
                className="p-2 bg-slate-200 my-5 w-96"
                onChange={(e) => setDescription(e.target.value)}
                required
                value={task.description}
              />
              <br />
              <div>
                <h4 className="text-lg font-bold mb-2">Status</h4>
                <select
                  value={task.status ? task.status : "Select an option"}
                  onChange={handleChange}
                  className="px-20 py-2 border border-gray-400 rounded"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 mt-5">Date</h4>
                <input
                  type="date"
                  className="w-96 p-2 rounded shad"
                  required
                  value={task.date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <br />
              <button
                className="bg-blue-500 px-10 text-white p-2 w-96 rounded"
                onClick={createTodo}
                type="submit"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
