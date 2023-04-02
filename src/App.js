import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage"
import SignUpPage from "./pages/auth/SignUpPage"
import AddData from './pages/AddData'
import Home from './pages/home';

function App() {
  return (
   <div>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/home" element={<Home/>} />
            <Route path='/add-data' element={<AddData/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;