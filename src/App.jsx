import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import StartupPage from './pages/StartupPage';
import Login from './components/Login';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<LandingPage />} />
        <Route path='/startup' element={<StartupPage />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
