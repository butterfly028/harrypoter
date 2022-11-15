import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Home from "./pages/Home/Home";
import Shipment from "./pages/Shipment/Shipment";

function App() {
  return (
    <Box sx={{ alignItems: "left", justifyContent: "center" }} className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipment" element={<Shipment />} />
      </Routes>
    </Box>
  );
}

export default App;
