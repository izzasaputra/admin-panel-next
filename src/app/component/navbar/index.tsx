import { useEffect, useState } from "react";
import styles from "../navbar/navbar.module.scss";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import MailIcon from "@mui/icons-material/MailOutlined";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export default function Navbar({ openSidebar }: { openSidebar: boolean }) {
  return (
    <div className={styles.navbar}>
      <div
        className={`${
          !openSidebar ? styles.navbar_section_full : styles.navbar_section
        }`}
      >
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
    </div>
  );
}
