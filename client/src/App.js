import { Route, Routes } from "react-router-dom";
import "./App.css";
import Completed from "./components/Completed";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";
import Pending from "./components/Pending";
import Today from "./components/Today";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/today" element={<Today />} />
        <Route path="/finished" element={<Completed />} />
      </Routes>
    </Layout>
  );
}

export default App;
