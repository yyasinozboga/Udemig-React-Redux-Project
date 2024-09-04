import { RxCross1 } from "react-icons/rx";

const Modal = ({ close }) => {
  return (
    <div className="flex justify-center items-center w-[30%] p-3 m-auto border rounded-lg">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl">Ürün Oluştur</h1>
        <button onClick={close} className="text-3xl">
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default Modal;
