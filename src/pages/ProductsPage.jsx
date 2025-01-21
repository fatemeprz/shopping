import Card from "../components/Card";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import { useProducts } from "../context/ContextProvider";
import { RotatingLines } from "react-loader-spinner";


function ProductsPage() {
  const products=useProducts()
  return (
    <>
    <Search/>
    <div className="flex flex-col-reverse">
    
      {!products.length ? (
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
        <div className="flex justify-evenly md:justify-between flex-wrap gap-2">
          {products.map((product) => (
            <Card key={product.id} data={product}/>
          ))}
        </div>
      )}
   
      
      <div><CategoryList/></div>
    </div>
    </>

  );
}

export default ProductsPage;
