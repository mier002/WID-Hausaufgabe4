import React from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

const Filter = ({
  uniqueAnbieter,
  uniqueService,
  selectedAnbieter,
  selectedService,
  handleAnbieterChange,
  handleServiceChange,
}) => {
  return (
    <Box display="flex" justifyContent="flex-end" gap={2} p={2}>
      <FormControl variant="outlined" size="small">
        <Select
          value={selectedAnbieter}
          onChange={handleAnbieterChange}
          label="Anbieter"
        >
          <MenuItem value="">
            <em>Alle Anbieter</em>
          </MenuItem>
          {uniqueAnbieter.map((anbieter, index) => (
            <MenuItem key={index} value={anbieter}>
              {anbieter}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" size="small">
        <Select
          value={selectedService}
          onChange={handleServiceChange}
          label="Service"
        >
          <MenuItem value="">
            <em>Alle Services</em>
          </MenuItem>
          {uniqueService.map((service, index) => (
            <MenuItem key={index} value={service}>
              {service}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
