import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";

export default function Modal({ view, setModal }) {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state);

  console.log(value);

  const [title, setTitle] = useState("");
  if (!view) {
    return null;
  }
  const closeModal = (e) => {
    if (e.target.id === "container") {
      setModal((m) => !m);
    }
  };

  const createTodo = () => {
    dispatch(
      addTask({
        title,
      })
    );
  };

  return (
    <div
      id="container"
      className="bg-opacity-30 backdrop-blur fixed inset-0 flex justify-center z-15 py-10"
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
          <input
            type="text"
            placeholder="Title"
            className="p-2 bg-slate-200 w-96"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            type="text"
            placeholder="Description"
            className="p-2 bg-slate-200 my-5 w-96"
          />
          <br />
          <input
            type="text"
            placeholder="Status"
            className="p-2 bg-slate-200 w-96"
          />
          <br />
          <input
            type="text"
            placeholder="Priority"
            className="p-2 bg-slate-200 w-96 my-5"
          />
          <div className="flex justify-center">
            <Calendar onChange={onChange} value={value} />
          </div>
          <button
            className="bg-blue-500 px-10 text-white p-2 rounded w-full mt-10"
            onClick={createTodo}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
