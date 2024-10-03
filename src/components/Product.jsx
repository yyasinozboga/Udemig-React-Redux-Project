import { MdOutlineMoreHoriz } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import actionsTypes from "../redux/actionsTypes";

const Product = ({ product }) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { text } = useSelector((store) => store.productReducer);
  console.log(text);
  const handleDelete = () => {
    dispatch({ type: actionsTypes.DELETE, payload: product.id });
  };

  return (
    <>
      <div
        className={`w-52 relative ${
          text === "" || !text
            ? "block"
            : product.name.toUpperCase().includes(text?.toUpperCase())
            ? "block"
            : "hidden"
        }`}
      >
        <figure className="w-full h-36 rounded-tl-md rounded-tr-md">
          <img
            src={product.file}
            alt={product.name}
            className="size-full h-full object-cover"
          />
        </figure>

        <div className="bg-indigo-700 text-white p-1">
          <h3 className="text-2xl">{product.name}</h3>
          <span>{product.price}</span>
        </div>

        <button
          className="absolute -top-2 right-0 text-white text-4xl"
          onClick={() => setIsActive(!isActive)}
        >
          <MdOutlineMoreHoriz />
        </button>

        {isActive && (
          <div
            className="p-1 flex flex-col items-start border rounded-md absolute right-1 top-5 text-white bg-black"
            onClick={() => setIsActive(false)}
          >
            <button onClick={handleDelete}>Sil</button>
            <button onClick={() => setIsOpen(true)}>Düzenle</button>
          </div>
        )}
      </div>

      {isOpen && (
        <Modal close={() => setIsOpen(false)} product={product} isUpdate />
      )}
    </>
  );
};

export default Product;
