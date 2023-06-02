import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiSearchLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { addFilter } from "../redux/slices/taskSlice";
import Modal from "./Modal";

export default function Nav() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="flex flex-col-reverse gap-y-5 shad rounded-lg py-3 px-5 lg:flex-row justify-between items-center">
        <div className="lg:flex items-center justify-between hidden ">
          <span className="font-bold">
            <TiTick className="text-blue-500 inline text-2xl mb-1" />
            Task Manager
          </span>
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-row items-center">
          <div className="relative">
            <input
              type="text"
              className="bg-gray-200 rounded-md py-2 md:w-96 px-10"
              placeholder="Search"
              onChange={(e) => {dispatch(addFilter(e.target.value))}}
            />
            <RiSearchLine className="text-gray-400 text-2xl absolute left-2 top-2" />
            
          </div>
          <div>
            <button className="px-5 mt-1.5" onClick={() => setModal(true)}>
              <AiOutlinePlus className="text-2xl text-gray-600" />
            </button>
          </div>
        </div>
        <div>
          <button>
            <CiUser className="text-2xl text-gray-600 mt-1.5" />
          </button>
        </div>
      </nav>
      <div>{modal && <Modal view={modal} setModal={setModal} />}</div>
    </>
  );
}
