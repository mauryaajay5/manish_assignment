import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import { Grid } from "@mui/material";

const MainPart = () => {
  return (
    <Grid md={10} sx={{ display: "flex", justifyContent: "space-between" }}>
      <Grid md={3} ml={4}>
        <MainLeft />
      </Grid>
      <Grid md={7} mr={5}>
        <MainRight />
      </Grid>
    </Grid>
  );
};

export default MainPart;
