import React from "react";

import { Container, Typography } from "@mui/material";

const EmptyBasketTotal = () => {
  return (
    <Container sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom color="red">
        You have no items in your shopping cart,{" "}
        <a href="/" style={{ textDecoration: "none", color: "blue" }}>
          start adding some!
        </a>
      </Typography>
    </Container>
  );
};

export default EmptyBasketTotal;
