import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Home from "./Pages/Home"
function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    </Router>
  )
}

export default App
