import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CurrentUser from "./contexts/CurrentUser.js";
import CurrentVideo from "./contexts/CurrentVideo.js";


import Video from "./pages/Video";

export default function App() {
  return (
    <div className="main-container">
      <CurrentUser.Provider value={""}>
        <CurrentVideo.Provider value={""}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video" element={ <Video /> } />
            </Routes>
          </BrowserRouter>
        </CurrentVideo.Provider>
      </CurrentUser.Provider>
    </div>
  );
}
