import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CurrentUser from "./contexts/CurrentUser.js";

export default function App() {
  return (
    <div className="main-container">
      <CurrentUser.Provider value={""}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CurrentUser.Provider>
    </div>
  );
}
