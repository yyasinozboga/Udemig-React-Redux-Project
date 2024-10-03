import { MdOutlinePostAdd } from "react-icons/md";
import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import actionsTypes from "../redux/actionsTypes";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const payload = e.target.value;
    if (payload) {
      dispatch({ type: actionsTypes.SORT_PRODUCTS, payload });
    }
  };

  return (
    <>
      <header className="bg-indigo-700 p-3 flex justify-between">
        <h1 className="text-white text-3xl">REACT UYGULAMA</h1>

        <div className="flex items-center gap-5">
          <select
            className="p-2 rounded-lg outline-none"
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>

          <input
            type="text"
            className="p-2 rounded-lg outline-none"
            placeholder="Search..."
          />
          <button
            className="text-white p-2.5 rounded-full bg-indigo-800 text-2xl"
            onClick={() => setIsOpen(true)}
          >
            <MdOutlinePostAdd />
          </button>
        </div>
      </header>

      {isOpen && <Modal close={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
