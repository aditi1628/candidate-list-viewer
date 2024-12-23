const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const candidates = [
  { id: 1, name: "Aanya Singhal", skills: ["React", "Node.js"], experience: 5 },
  { id: 2, name: "Bhoomi Singh", skills: ["Angular", "Python"], experience: 3 },
  { id: 3, name: "Charu Gandhi", skills: ["Vue.js", "Ruby"], experience: 4 },
  { id: 4, name: "Diya Mehra", skills: ["React", "Express"], experience: 6 },
  {
    id: 5,
    name: "Edha Shukla",
    skills: ["Java", "Spring Boot"],
    experience: 7,
  },
  {
    id: 6,
    name: "Falguni Dhingra",
    skills: ["C++", "Embedded Systems"],
    experience: 8,
  },
  { id: 7, name: "Gauri Sharma", skills: ["Fortran", "COBOL"], experience: 15 },
  { id: 8, name: "Harsha Gautam", skills: ["Python", "Flask"], experience: 2 },
  { id: 9, name: "Ishita Rana", skills: ["Javascript", "CSS"], experience: 3 },
  {
    id: 10,
    name: "Janhvi Kohli",
    skills: ["Golang", "Kubernetes"],
    experience: 5,
  },
];

app.get("/api/candidates", (req, res) => {
  console.log("Received request for candidates");
  res.json(candidates);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
