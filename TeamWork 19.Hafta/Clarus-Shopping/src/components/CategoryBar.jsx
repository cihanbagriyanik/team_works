import React from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Container } from "@mui/material";

const CategoryBar = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="All" control={<Radio />} label="All" />
          <FormControlLabel
            value="Electronics"
            control={<Radio />}
            label="Electronics"
          />
          <FormControlLabel
            value="Jewelery"
            control={<Radio />}
            label="Jewelery"
          />
          <FormControlLabel
            value="Men's Clothing"
            control={<Radio />}
            label="Men's Clothing"
          />
          <FormControlLabel
            value="Women's Clothing"
            control={<Radio />}
            label="Women's Clothing"
          />
        </RadioGroup>
      </FormControl>
    </Container>
  );
};

export default CategoryBar;
