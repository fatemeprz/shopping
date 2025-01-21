import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className='flex my-6'>
        <input className=" border h-8 w-52 md:w-64 rounded-lg border-primary border-dashed px-3 outline-none" type="text"  placeholder="search here" />
        <button className="ml-2 bg-primary h-8 text-white px-2 rounded-lg hover:bg-hover" type="button"><FaSearch /></button>
    </div>
  )
}

export default Search