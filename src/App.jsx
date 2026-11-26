import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import Navbar from "./components/navigation/Navbar";
import FullScreenNav from "./components/navigation/FullScreenNav";
import NavContext from "./context/NavContext";

const App = () => {
  return (
    <div>
      <NavContext>
        <FullScreenNav />
        <Navbar />
      </NavContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  );
};

export default App;
