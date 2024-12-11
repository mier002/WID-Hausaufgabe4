import React from "react";

const DataTable = ({ filteredData }) => {
  return (
    <div className="TableWrapper">
      <table>
        <thead id="TableHeader">
          <tr>
            <th>anbieter</th>
            <th>datensatz</th>
            <th>zusammenfassung</th>
            <th>service</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody id="TableBody">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.anbieter}</td>
                <td>{item.datensatz}</td>
                <td>{item.zusammenfassung}</td>
                <td>{item.service}</td>
                <td>{item.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Keine Daten verfügbar</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
