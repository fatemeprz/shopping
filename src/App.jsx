import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import ProductProvider from "./context/ProductProvider";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
    <ProductProvider>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ProductProvider>
    </Layout>
  );
}

export default App;
