"use client";
import * as React from "react";
import Dashboard from "../../container/template";
import Table from "../../container/user/table";

export default function RowAndColumnSpacing() {
  return (
    <>
      <Dashboard>
        <h1>User</h1>
        <Table />
      </Dashboard>
    </>
  );
}
