import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "2rem 1.5rem",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent sx={{ display: "flex" }}>
          <Typography variant="body1" gutterBottom color="text.secondary">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Typography>
          <Typography variant="h6" gutterBottom color="text.black">
            109.95$
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            men's clothing
          </Typography>
          <Button size="medium" color="primary">
            <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
