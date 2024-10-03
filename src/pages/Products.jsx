import { useSelector } from "react-redux";
import Product from "../components/Product";

const Products = () => {
  const { products } = useSelector((store) => store.productReducer);

  return (
    <main className="p-3">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Products;
