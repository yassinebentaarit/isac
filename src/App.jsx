import './App.css'
import { Routes,Route } from "react-router-dom";
import LoginRegister from './Components/LoginRegister/LoginRegister'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/LoginRegister/Register';
import Login from './Components/LoginRegister/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import Dashboard from './Pages/Dashboard';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>

      <div>
        <Navbar/>
        <Toaster position = 'bottom-right' toastOptions={{duration: 3000}} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/loginRegister' element={<LoginRegister/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </UserContextProvider>

  )
}

export default App
