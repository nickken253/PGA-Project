import { Route, Routes } from "react-router-dom";
import React from "react";
import { TableList } from "./TableList";

export const TableListRoutes = () => {
  // console.log("AuthRoutes - index");

  return (
    <Routes>
        <Route path="/table-list" element={<TableList />} />
    </Routes>
  );
};