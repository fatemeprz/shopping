

function CategoryList() {
  return (
    <ul className="flex flex-wrap *:mr-4 *:px-4 *:py-1 *:mb-3  *:rounded-2xl  *:border *:border-primary *:border-dashed *:text-sm *:cursor-pointer">
      <li className="hover:bg-hover bg-primary ">All</li>
      <li className="hover:bg-hover">Electronics</li>
      <li className="hover:bg-hover">Jewelery</li>
      <li className="hover:bg-hover">Men's Clothing</li>
      <li className="hover:bg-hover">Women's Clothing</li>
    </ul>
  );
}

export default CategoryList;
