import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "../App.css";

const HeadingPart = () => {
  return (
    <Grid className="box">
      <Typography variant="h4">OLX GROUP</Typography>
      <Grid>
        <Button variant="outlined" className="head">
          submit candidate
        </Button>
      </Grid>
    </Grid>
  );
};

export default HeadingPart;
