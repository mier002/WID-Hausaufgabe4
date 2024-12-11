import "./App.css";
import React, { useState } from "react";
import filedata from "./data/tableData.json";
import Header from "./Header";
import Filter from "./Filter";
import DataTable from "./DataTable";

function App() {
  const [selectedAnbieter, setSelectedAnbieter] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleAnbieterChange = (event) => {
    setSelectedAnbieter(event.target.value);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const uniqueAnbieter = [...new Set(filedata.map((item) => item.anbieter))];
  const uniqueService = [...new Set(filedata.map((item) => item.service))];

  const filteredData = filedata
    .filter((item) =>
      selectedAnbieter ? item.anbieter === selectedAnbieter : true
    )
    .filter((item) =>
      selectedService ? item.service === selectedService : true
    );

  return (
    <div className="App">
      <Header />
      <Filter
        uniqueAnbieter={uniqueAnbieter}
        uniqueService={uniqueService}
        selectedAnbieter={selectedAnbieter}
        selectedService={selectedService}
        handleAnbieterChange={handleAnbieterChange}
        handleServiceChange={handleServiceChange}
      />
      <DataTable filteredData={filteredData} />
    </div>
  );
}

export default App;
