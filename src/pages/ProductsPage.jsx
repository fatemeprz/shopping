import Card from "../components/Card";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import { useProducts } from "../context/ContextProvider";
import { RotatingLines } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { filterByCategory, filterByName } from "../helper/filterProducts";

function ProductsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [query, setQuery] = useState({category:"all"});
  useEffect(() => {
    setDisplay(products);
  }, [products]);
  useEffect(() => {
    if (!search) setDisplay(products);
    if (query.category) {
      const filterProducts = filterByCategory(query.category, products);
      setDisplay(filterProducts);
    }

    let filterProducts = filterByName(search, products);
    if (query.category) {
      filterProducts = filterByCategory(query.category, filterProducts);
    }
    console.log(query);
    setDisplay(filterProducts);
  }, [query]);
  return (
    <>
      <Search data={{ search, setSearch }} query={{ query, setQuery }} />
      <div className="flex flex-col-reverse">
        {!display.length ? (
          <div className=" flex justify-center items-center h-screen">
            <RotatingLines
              height="80"
              width="80"
              color="grey"
              strokeWidth="3"
              strokeColor="#fe5d42"
            />
          </div>
        ) : (
          <div className="flex justify-around  flex-wrap gap-2">
            {display.map((product) => (
              <Card key={product.id} data={product} />
            ))}
          </div>
        )}

        <div>
          <CategoryList query={{ query, setQuery }} />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
