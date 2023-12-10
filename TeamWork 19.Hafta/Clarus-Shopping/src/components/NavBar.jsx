import React from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { count } = useSelector((state) => state.baskets);
  const navigate = useNavigate();
  // console.log(count);
  return (
    <AppBar
      position="fixed"
      sx={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        background:"#1976D2",
        color:"white"
      }}
      color="inherit"
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            alignItems: "center",
            display: "flex",
            gap: 2,
            cursor: "pointer",
          }}
          color="inherit"
          onClick={() => navigate("/")}
        >
          {"< CihanBag />"} Shopping{" "}
        </Typography>

        <IconButton
          aria-label="Show cart items"
          color="inherit"
          onClick={() => navigate("/basket")}
        >
          <Badge badgeContent={count} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
