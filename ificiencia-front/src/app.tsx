import { Routes, Route,Navigate} from 'react-router-dom'
import Home from "./pages/home"
import PacientPage from './pages/pacientpage'
import RegisterPacient from './pages/registerPacient'
import LoginPage from './pages/loginPage'
import RegisterCareGiver from './pages/registerCareGiver'
import CaregiverHome from './pages/caregiversHome'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace/>} />
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="/pacient-page" element={<PacientPage/>}/>
      <Route path="/register-pacient" element= {<RegisterPacient></RegisterPacient>}></Route>
      <Route path= "/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register-caregiver" element={<RegisterCareGiver></RegisterCareGiver>}></Route>
      <Route path="/caregiver-home" element={<CaregiverHome></CaregiverHome>}></Route>  
    </Routes>
  )
}