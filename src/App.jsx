import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import RosterPage from "./components/RosterPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeTitle1="Rewatch some of most popular events this year"
              homeTitle2="Our Weekly Shows"
            />
          }
        />
        <Route path="/Roster" element={<RosterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
