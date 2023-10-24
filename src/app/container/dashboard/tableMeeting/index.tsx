import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LinkedIn from "../../../../../public/linkedIn_icon.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
import variable from "../../../util/variables.module.scss";
import Button from "@mui/material/Button";

function createData(time: string, schedule: string, action: number) {
  return { time, schedule, action };
}

const rows = [
  createData("12:00 AM", "Artifical Intellegent", 6.0),
  createData("12:00 AM", "Artifical Intellegent", 9.0),
  createData("12:00 AM", "Artifical Intellegent", 16.0),
  createData("12:00 AM", "Artifical Intellegent", 3.7),
  createData("12:00 AM", "Artifical Intellegent", 16.0),
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none", backgroundColor: "none" }}
    >
      <Table sx={{ minWidth: 576, border: "none" }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: variable.backgroundColor }}>
          <TableRow>
            <TableCell sx={{ border: "none" }}>#Time</TableCell>
            <TableCell align="left" sx={{ border: "none" }}>
              #Schedule Post
            </TableCell>
            <TableCell align="left" sx={{ border: "none" }}>
              #See
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.time}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                }}
              >
                <AccessTimeIcon sx={{ width: 20, mr: 1 }} />
                {row.time}
              </TableCell>
              <TableCell align="left" sx={{ border: "none" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={LinkedIn}
                    alt="LinkedIn"
                    width={15}
                    style={{ marginRight: 5 }}
                  />
                  {row.schedule}
                </div>
              </TableCell>
              <TableCell
                sx={{
                  border: "none",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    height: 25,
                    backgroundColor: variable.backgroundColor,
                    color: variable.primaryColor,
                    textTransform: "capitalize",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: variable.backgroundColor,
                      boxShadow: "none",
                    },
                  }}
                >
                  See
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
