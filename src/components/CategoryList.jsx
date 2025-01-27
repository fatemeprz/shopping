import categories from "../constant/list";

function CategoryList({ query: { query, setQuery } }) {
  const categoryHandler = (e) => {
    console.dir(e.target.childNodes);
    const { tagName } = e.target;
    if (tagName !== "LI") return;

    const category = e.target.innerText.toLowerCase();
    setQuery((query) => ({ ...query, category }));
  };
  return (
    <ul
      onClick={categoryHandler}
      className="flex flex-wrap *:mr-4 *:px-4 *:py-1 *:mb-3  *:rounded-2xl  *:border *:border-primary *:border-dashed *:text-sm *:cursor-pointer"
    >
      {categories.map((item) => (
        <li
          className={`
            ${
              item.type.toLowerCase() === query.category
                ? "category-selected"
                : null
            } hover:bg-primary`}
          key={item.id}
        >
          {item.type}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
