import Card from "../components/Card";
import { useProducts } from "../context/ContextProvider";
import { RotatingLines } from "react-loader-spinner";


function ProductsPage() {
  const products=useProducts()
  return (
    <div className="flex flex-col-reverse">
    <>
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
        <div className="flex justify-around flex-wrap gap-3 xl:justify-between ">
          {products.map((product) => (
            <Card key={product.id} data={product}/>
          ))}
        </div>
      )}
    </>
      
      <div>Sidebar</div>
    </div>

  );
}

export default ProductsPage;
