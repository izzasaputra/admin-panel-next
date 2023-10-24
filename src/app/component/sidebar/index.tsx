import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../sidebar/sidebar.module.scss";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

interface SidebarProps {
  openSidebar: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ openSidebar, toggleSidebar }: SidebarProps) {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = () => {
    setOpen(!open);
  };

  const indexToUrl = (index: number) => {
    switch (index) {
      case 1:
        return "/home";
      case 2:
        return "/dashboard";
      case 3:
        return "/user";
      default:
        return "/home";
    }
  };

  const urlToIndex = (url: string) => {
    switch (url) {
      case "/home":
        return 1;
      case "/dashboard":
        return 2;
      case "/user":
        return 3;
      default:
        return 1;
    }
  };

  const sidebarMenu = [
    {
      name: "Home",
      index: 1,
      icon: <HomeOutlinedIcon />,
    },
    {
      name: "Dashboard",
      index: 2,
      icon: <SpaceDashboardOutlinedIcon />,
    },
    {
      name: "Data",
      icon: <FolderOpenOutlinedIcon />,
      children: [
        {
          name: "User",
          index: 3,
          icon: <PersonOutlineOutlinedIcon />,
        },
        {
          name: "Statistic",
          index: 4,
          icon: <GroupsOutlinedIcon />,
        },
        {
          name: "Widget",
          index: 5,
          icon: <GroupsOutlinedIcon />,
        },
      ],
    },
  ];

  const handleSelected = (index: number) => {
    router.push(indexToUrl(index));
  };

  useEffect(() => {
    const url = window.location.pathname;
    setSelectedIndex(urlToIndex(url));
  }, []);

  return (
    <div className={`${styles.sidebar} ${!openSidebar ? styles.close : ""}`}>
      <div
        className={`${
          openSidebar ? styles.sidebar_section : styles.sidebar_section_close
        }`}
      >
        <Grid container spacing={2}>
          {openSidebar && (
            <Grid item xs={8} className={styles.logo_container}>
              <div className={styles.logo} />
            </Grid>
          )}
          <Grid
            item
            xs={openSidebar ? 4 : 12}
            className={`${
              openSidebar
                ? styles.action_button_warpper
                : styles.action_button_close_wrapper
            }`}
            onClick={toggleSidebar}
          >
            {openSidebar ? (
              <div className={styles.icon}>
                <ClearIcon />
              </div>
            ) : (
              <div className={styles.icon}>
                <DehazeIcon className={styles.icon} />
              </div>
            )}
          </Grid>
        </Grid>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            mt: 2,
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {sidebarMenu.map((item) => (
            <React.Fragment key={item.name}>
              {item.children ? (
                <>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map((children) => (
                        <React.Fragment key={children.index}>
                          <ListItemButton
                            sx={{ pl: 4 }}
                            selected={selectedIndex === children.index}
                            onClick={() => handleSelected(children.index)}
                          >
                            <ListItemIcon>{children.icon}</ListItemIcon>
                            <ListItemText primary={children.name} />
                          </ListItemButton>
                        </React.Fragment>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemButton
                  selected={selectedIndex === item.index}
                  onClick={() => handleSelected(item.index)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              )}
            </React.Fragment>
          ))}
        </List>
      </div>
    </div>
  );
}
