import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between bg-primary py-6 px-5 text-white rounded-xl">
      <span className="text-lg font-semibold">Shopping card</span>
      <span className="text-2xl">
        <FaShoppingCart />
      </span>
    </header>
  );
}

export default Header;
