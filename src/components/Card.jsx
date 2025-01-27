import { shortTitle } from "../helper/shortTitle";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

function Card({ data }) {
  const { id, title, image, price } = data;
  return (
    <>
      <div className=" bg-white  mx-3  p-6 my-10 border border-[#e2e2e2] border-dashed rounded-lg leading-6">
        <img className="w-28 h-40 m-auto" src={image} alt="image" />
        <p className="text-primary font-bold mt-5 mb-2 h-12">
          {shortTitle(title)}
        </p>
        <span className="text-slate-800 text-[15px] font-semibold">
          {price} $
        </span>
        <div className="flex justify-between items-center mt-10">
          <Link
            to={`/products/${id}`}
            className="text-primary text-[22px] cursor-pointer hover:text-hover transition duration-400"
          >
            <TbListDetails />
          </Link>
          <Link
            to="/checkout"
            className="text-white p-1 rounded-xl bg-primary text-[22px] cursor-pointer hover:bg-hover transition duration-400"
          >
            <TbShoppingBagCheck />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
