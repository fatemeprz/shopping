import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/config";

export const ProductContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/users"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export default ContextProvider;

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};
export { useProducts };
