import { useEffect, useState } from "react";
import { createQueryObject } from "../helper/createQueryObject";

function Search({ data: { search, setSearch }, query, setQuery }) {
  useEffect(() => {
    setQuery((query) => createQueryObject(query,{search}));
  }, [search]);

  return (
    <div className="flex my-6">
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase().trimStart());
        }}
        className=" border h-8 w-52 md:w-64 rounded-lg border-primary border-dashed px-3 outline-none"
        type="text"
        placeholder="search here"
      />
    </div>
  );
}

export default Search;
