import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoveList from "./pages/MoveList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<MoveList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
