import React from "react";
import "./App.css";

import Canvas from "./app/components/UI/Canvas";
import Navbar from "./app/components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Readme from "./app/pages/Readme/Readme";
import Spend from "./app/pages/Spend/Spend";
import Cfm from "./services/CFM/Cfm";
import Piggy from "./app/pages/Piggy/Piggy";
import Rewards from "./app/pages/Rewards/Rewards";
import Testing from "./app/pages/testing/Testing";

function App() {
  return (
    <div className="App">
      <Canvas>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Readme />} />
            <Route path="/readme" element={<Readme />} />
            <Route path="/cfm" element={<Cfm />} />
            <Route path="/spend" element={<Spend />} />
            <Route path="/piggy" element={<Piggy />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/testing" element={<Testing />} />
          </Routes>
        </BrowserRouter>
      </Canvas>
    </div>
  );
}

export default App;
