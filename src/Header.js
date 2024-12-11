import React from "react";
import { Box, Typography } from "@mui/material";
import geoharvester from "./geoharvester.png";

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
    >
      <img src={geoharvester} alt="Geoharvester" className="Logo" />
      <Typography variant="h6" id="HeaderText">
        Ein Katalog für schweizer Geodienste
      </Typography>
    </Box>
  );
};

export default Header;
