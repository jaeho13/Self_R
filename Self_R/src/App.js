import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import Home from "./component/Home";
import About from "./component/About";
import Second from "./component/Second";

import Question1 from "./component/question/Question1";
import Question2 from "./component/question/Question2";
import Question3 from "./component/question/Question3";
import Question4 from "./component/question/Question4";

function App() {
  return (
    <div className="App">
      <nav>
      </nav>
      <Router>
      <Routes>
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/question4" element={<Question4 />} />
      </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;