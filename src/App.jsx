import "./App.css";
import Main from "./pages/Main";
import Question from "./pages/Question";
import Results from "./pages/Results";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
