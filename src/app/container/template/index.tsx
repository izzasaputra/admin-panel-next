import React, { useState } from "react";
import Sidebar from "../../component/sidebar";
import styles from "../template/template.module.scss";
import Navbar from "../../component/navbar";

interface DashboardProps {
  children: React.ReactNode;
  background?: boolean;
}

export default function Dashboard({
  children,
  background = false,
}: DashboardProps) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  return (
    <div className={styles.dashboard}>
      <Navbar openSidebar={openSidebar} />
      <Sidebar
        openSidebar={openSidebar}
        toggleSidebar={() => setOpenSidebar(!openSidebar)}
      />
      <main className={openSidebar ? styles.content : styles.contentExpanded}>
        <div
          className={`${styles.contentWrapper} ${
            background ? styles.contentWrapperBackground : ""
          }`}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
