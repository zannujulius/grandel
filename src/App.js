import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/About";
import Service from "./screens/Service";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="service" element={<Service />} />
    </Routes>
  );
}

export default App;
