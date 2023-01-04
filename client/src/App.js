import './App.css';
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import Navbar from './components/Navbar';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route  path="/" 
                element={<Login />}
              
              >
                  
                </Route>
                <Route  path="/register" 
                element={<Register />}
                
                >
                  
                </Route>
                <Route  path="/dashboard"
                element= {<Dashboard />}
                
                >
                  
                </Route>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
