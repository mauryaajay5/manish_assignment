import { Grid, Typography } from "@mui/material";
import React from "react";
import "../App.css";

const MainLeft = () => {
  return (
    <Grid>
      <Grid className="divbox">
        <Typography>Clients</Typography>
      </Grid>
      <Grid className="divbox2">
        <Typography>Jobs</Typography>
      </Grid>
      <Grid className="divbox">
        <Typography>Candidates</Typography>
      </Grid>
      <Grid className="divbox">
        <Typography>Setting</Typography>
      </Grid>
    </Grid>
  );
};

export default MainLeft;
