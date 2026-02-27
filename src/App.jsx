
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>White Label Personal Trainer</h1>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Dashboard | </Link>
        <Link to="/students">Alunos | </Link>
        <Link to="/workouts">Treinos | </Link>
        <Link to="/nutrition">Dieta</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
      </Routes>
    </div>
  );
}
