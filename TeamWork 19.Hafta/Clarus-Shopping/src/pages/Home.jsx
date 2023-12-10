import { CircularProgress, Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategoriBar from "../components/CategoryBar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = (url="") => {
    const baseUrl = "https://fakestoreapi.com/products";
    setLoading(true);
    axios
      .get(baseUrl+url)
      .then(res => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  };
  return (
    <Container>
      {!loading ? (
        <Grid container justifyContent="center" spacing={4} mt={10}>
          <CategoriBar getProducts={getProducts} selected={selected} setSelected={setSelected} />
          {products.map(product => (
            <Grid item key={product.id}>
              <ProductCard product={product} text="Add" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container justifyContent="center" alignItems={"center"} mt={15}>
          <CircularProgress />
        </Grid>
      )}
    </Container>
  );
};

export default Home;
