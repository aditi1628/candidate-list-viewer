import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CandidateTable.css";

const CandidateTable = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/candidates")
      .then((response) => {
        console.log("Fetched data:", response.data);
        setCandidates(response.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    return sortOrder === "asc"
      ? a.experience - b.experience
      : b.experience - a.experience;
  });

  return (
    <div className="candidate-container">
      <h1 className="candidate-header">Candidate List</h1>
      <div className="candidate-controls">
        <input
          type="text"
          placeholder="Search by Name or Skills"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <button
          className="sort-button"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort by Experience ({sortOrder === "asc" ? "Ascending" : "Descending"}
          )
        </button>
      </div>
      <div className="table-container">
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Skills</th>
              <th>Years of Experience</th>
            </tr>
          </thead>
          <tbody>
            {sortedCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.name}</td>
                <td>{candidate.skills.join(", ")}</td>
                <td>{candidate.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateTable;
