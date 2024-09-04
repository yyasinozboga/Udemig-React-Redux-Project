import { MdOutlinePostAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import actionsTypes from "../redux/actionsTypes";
import Modal from "./Modal";

const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: actionsTypes.OPEN });
  };
  const { isOpen } = useSelector((store) => store.productReducer);

  return (
    <>
      <header className="bg-indigo-700 p-3 flex justify-between">
        <h1 className="text-white text-3xl">REACT UYGULAMA</h1>

        <div className="flex items-center gap-5">
          <select className="p-2 rounded-lg outline-none">
            <option value="increase">Artan</option>
            <option value="decrease">Azalan</option>
          </select>

          <input
            type="text"
            className="p-2 rounded-lg outline-none"
            placeholder="Search..."
          />
          <button
            className="text-white p-2.5 rounded-full bg-indigo-800 text-2xl"
            onClick={handleClick}
          >
            <MdOutlinePostAdd />
          </button>
        </div>
      </header>

      {isOpen && <Modal close={handleClick} />}
    </>
  );
};

export default Header;
