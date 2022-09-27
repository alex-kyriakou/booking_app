import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Imported Components
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import SingleHotelPage from "./singleHotelPage/SingleHotelPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<SingleHotelPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
