import React, { useState, useContext, createContext } from 'react'; 
import './App.css';
import {  BasicMenu, SignUp, ForgotPass, ResetPassword, LogOut, Login, BackgroundLayout, TypeAnimations, StudentSignUp, TeacherSingUp, ParentSignUp} from './Components/';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import pi from './assets/icons/pi.png';


// Context creation
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};


function App() {
  return (
    <AuthProvider >
      <div className='w-full h-screen text-white px-8   '>
        <nav className='w-full p-3 flex justify-between items-center nav-color border-b-2 border-white '>
          <div className='nav-container '>
            <img src={pi} alt="Season" className='w-[4rem]' />
            <Link to='/'><h1 className='font-bold tracking-wide text-[3rem] text-weatherapp'>MathApp</h1></Link>
          </div>
          <div><BasicMenu /></div>
        </nav>
        <BackgroundLayout/>
    
        <Routes>
          <Route path='/' element={<TypeAnimations/>}/>
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/ForgotPass' element={<ForgotPass />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/LogOut" element={<PrivateRoute><LogOut/></PrivateRoute>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/StudentSignUp" element={<StudentSignUp />} />
          <Route path="/TeacherSingUp" element={<TeacherSingUp />} />
          <Route path="/ParentSignUp" element={<ParentSignUp />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}


export default App;
