import { MdOutlineMoreHoriz } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import actionsTypes from "../redux/actionsTypes";

const Product = ({ product }) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({ type: actionsTypes.DELETE, payload: product.id });
  };

  return (
    <>
      <div className="w-52 relative">
        <figure className="w-full bg-black rounded-tl-md rounded-tr-md">
          <img src={product.file} alt={product.name} className="w-full" />
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
            className="p-1 flex flex-col items-start border rounded-md absolute right-1 top-5 text-white"
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
