import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home"
import PacientPage from './pages/pacientpage'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pacient-page" element={<PacientPage/>}/>
    </Routes>
  )
}