import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import RosterPage from "./components/RosterPage"
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home homeTitle="Rewatch our popular events this year" />} />
      <Route path="/Roster" element={<RosterPage />} /> 
    </Routes>
    <Footer />
    </>
  )
}

export default App
