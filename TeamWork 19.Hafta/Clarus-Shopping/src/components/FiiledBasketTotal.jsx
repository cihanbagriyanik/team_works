import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import EmptyBasketTotal from "./EmptyBasketTotal";
import DeleteIcon from "@mui/icons-material/Delete";

const FiiledBasketTotal = () => {
  return (
    <>
      
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button size="small"> - </Button>
              <Typography variant="body2" color="text.secondary">
                1
              </Typography>
              <Button size="small"> + </Button>
            </Box>
            <Box>
              <Button variant="contained" size="medium" color="error">
                remove
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
      <Container sx={{ padding: "2rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" gutterBottom color="text.black">
            Subtotal: 109.95$
          </Typography>

          <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
            empty cart
          </Button>
        </Box>
      </Container>{" "}
      
      <EmptyBasketTotal />
    </>
  );
};

export default FiiledBasketTotal;
