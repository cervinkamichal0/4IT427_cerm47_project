import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <h1>Počasí</h1>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/weather/:city" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
