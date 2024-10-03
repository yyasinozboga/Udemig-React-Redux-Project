import { v4 } from "uuid";
import { RxCross1 } from "react-icons/rx";
import Input from "./Input";
import { useDispatch } from "react-redux";
import actionsTypes from "../redux/actionsTypes";

const Modal = ({ close, isUpdate, product }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value.trim();
    const price = e.target[1].value.trim();
    const file = URL.createObjectURL(e.target[2].files[0]);
    if (!isUpdate) {
      const newProduct = {
        id: v4(),
        name,
        price,
        file,
      };
      dispatch({ type: actionsTypes.ADD, payload: newProduct });
    } else {
      const updatedProduct = {
        ...product,
        name,
        price,
        file,
      };
      dispatch({ type: actionsTypes.UPDATE, payload: updatedProduct });
    }
    e.target.reset();
    close();
  };

  return (
    <div className="w-96 h-72 p-3 absolute inset-1/3 border rounded-lg">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl">
          {isUpdate ? "Ürünü Güncelle" : "Ürün Oluştur"}
        </h1>
        <button onClick={close} className="text-3xl">
          <RxCross1 />
        </button>
      </div>

      <form className="flex flex-col gap-3 mt-3" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ürün Ekle"
          isUpdate={isUpdate}
          value={product?.name}
        />
        <Input
          type="number"
          placeholder="Fiyat Ekle"
          isUpdate={isUpdate}
          value={product?.price}
        />
        <Input type="file" placeholder="Dosya Seç" />
        <div className="flex justify-end items-center gap-3">
          <button
            type="submit"
            className="border rounded-md w-full py-1.5 px-8 bg-indigo-700 text-white"
          >
            {isUpdate ? "Ürünü Güncelle" : "Ürünü Ekle"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
