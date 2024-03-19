import { Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
// import products from "../products";

const ListScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products/all");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Heading as="h2" mb="8" fontSize="xl" textAlign="center">
        Latest Products
      </Heading>

      <Grid templateColumns="1fr 1fr 1fr 1fr" gap="8">
        {products.map((prod) => (
          <ProductCard product={prod} />
        ))}
      </Grid>
    </>
  );
};

export default ListScreen;
