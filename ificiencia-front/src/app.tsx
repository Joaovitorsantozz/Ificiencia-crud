import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home"
import PacientPage from './pages/pacientpage'
import RegisterPacient from './pages/registerPacient'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pacient-page" element={<PacientPage/>}/>
      <Route path="/register-pacient" element= {<RegisterPacient></RegisterPacient>}></Route>
    </Routes>
  )
}