import { RxCross2 } from "react-icons/rx";

const Modal = ({ setModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-xs">
      <div className="container mx-auto max-w-80 mt-30 rounded border-1 bg-[#242424] h-45 flex flex-col items-end shadow-sm shadow-white">
        <button
          className="m-2 cursor-pointer hover:scale-90 transition duration-150 ease-in-out"
          onClick={() => setModal(false)}
        >
          <RxCross2 color="red" fontSize="1.5rem" />
        </button>
        <h1 className="w-full text-center mt-10">Please add a Todo!</h1>
      </div>
    </div>
  );
};

export default Modal;
