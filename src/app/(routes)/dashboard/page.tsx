"use client";
import * as React from "react";
import Dashboard from "../../container/template";
import todayDate from "../../component/todayDate";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import variable from "../../util/variables.module.scss";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import WrapTextOutlinedIcon from "@mui/icons-material/WrapTextOutlined";
import Table from "../../container/dashboard/tableMeeting";
import styles from "./content.module.scss";

const boxData = [
  {
    number: "2600",
    tittle: "People Connected",
    color: variable.lavender,
    icon: <GroupsOutlinedIcon sx={{ display: "block" }} />,
  },
  {
    number: "70%",
    tittle: "Open Rate",
    color: variable.brightPink,
    icon: <DraftsOutlinedIcon sx={{ display: "block" }} />,
  },
  {
    number: "20%",
    tittle: "Response Rate",
    color: variable.vividOrange,
    icon: <ReplyAllOutlinedIcon sx={{ display: "block" }} />,
  },
  {
    number: "200",
    tittle: "Meeting Booked",
    color: variable.brightBlue,
    icon: <Diversity3OutlinedIcon sx={{ display: "block" }} />,
  },
  {
    number: "187",
    tittle: "Converted Lead",
    color: variable.lavenderPurple,
    icon: <PersonAddAltOutlinedIcon sx={{ display: "block" }} />,
  },
  {
    number: "200K",
    tittle: "Interaction on Post",
    color: variable.darkBlue,
    icon: <AdsClickOutlinedIcon sx={{ display: "block" }} />,
  },
  {
    number: "2M",
    tittle: "Impression on Post",
    color: variable.turquoise,
    icon: <AutoGraphOutlinedIcon sx={{ display: "block" }} />,
  },
  {
    number: "90%",
    tittle: "Conversion Rate",
    color: variable.darkGreen,
    icon: <WrapTextOutlinedIcon sx={{ display: "block" }} />,
  },
];

export default function RowAndColumnSpacing() {
  return (
    <>
      <Dashboard background={false}>
        Today | {todayDate}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {boxData.map((item) => (
            <>
              <Grid item xs={12} sm={6} lg={3}>
                <Box
                  sx={{
                    width: "100%",
                    height: 100,
                    backgroundColor: item.color,
                    borderRadius: "10px",
                    padding: 2,
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className={styles.menu_icon}>{item.icon}</div>
                  <div style={{ marginLeft: 20, color: "white" }}>
                    <div style={{ fontSize: "20px", fontWeight: "600" }}>
                      {item.number}
                    </div>
                    <div>{item.tittle}</div>
                  </div>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
        <div style={{ marginTop: "50px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
              <Table />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Table />
            </Grid>
          </Grid>
        </div>
      </Dashboard>
    </>
  );
}
