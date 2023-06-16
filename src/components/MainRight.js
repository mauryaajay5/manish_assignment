import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import "../App.css";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  OpenJobs: String,
  OLXGroup: String,
  submitted: number,
  Action: number,
  hired: string,
  location: String
) {
  return { OpenJobs, OLXGroup, submitted, Action, hired, location };
}

const rows = [createData("frontend", "grounp 1", 6, 2, 1, "noida")];

export default function MainRight() {
  return (
    <Grid sx={{ width: "100%" }}>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table sx={{ width: "1000px" }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Grid>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Open Jobs
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Open Jobs"
                    >
                      <MenuItem>Frontend</MenuItem>
                      <MenuItem>Backend</MenuItem>
                      <MenuItem>Data Science</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </TableCell>
              <TableCell align="center">
                <Grid>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      OLX Group
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="OLX Group"
                    >
                      <MenuItem>Group 1</MenuItem>
                      <MenuItem>Group 2</MenuItem>
                      <MenuItem>Group 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </TableCell>
              <TableCell align="center">submitted</TableCell>
              <TableCell align="center">Action</TableCell>
              <TableCell align="center">hired</TableCell>
              <TableCell align="center">location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.OpenJobs}
                </TableCell>
                <TableCell align="center">{row.OLXGroup}</TableCell>
                <TableCell align="center">{row.submitted}</TableCell>
                <TableCell align="center">{row.Action}</TableCell>
                <TableCell align="center">{row.hired}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
