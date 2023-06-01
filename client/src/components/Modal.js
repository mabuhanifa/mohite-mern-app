import { VscChromeClose } from "react-icons/vsc";

export default function Modal({ view, setModal }) {
  if (!view) return null;
  const closeModal = (e) => {
    if (e.target.id === "container") {
      setModal((m) => !m);
    }
  };
  return (
    <div
      id="container"
      className="mx-5 bg-opacity-30 backdrop-blur fixed inset-0 flex justify-center z-15 py-10"
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
          <input type="text" placeholder="Title" className="p-2 bg-slate-200 w-96" />
          <br />
          <textarea
            type="text"
            placeholder="Description"
            className="p-2 bg-slate-200 my-5 w-96"
          />
          <br />
          <input type="text" placeholder="Data" className="p-2 bg-slate-200 w-96" />
          <br />
        <button className="bg-blue-500 px-10 text-white p-2 rounded w-full mt-10">Create</button>
        </div>
      </div>
    </div>
  );
}