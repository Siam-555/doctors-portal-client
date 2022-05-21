import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pazes/Home/Home';
import Navbar from './Pazes/Shared/Navbar/Navbar';
import Appointment from './Pazes/Appointment/Appointment';
import Login from './Pazes/Login/Login';
import SignUp from './Pazes/Login/SignUp';
import RequireAuth from './Pazes/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
