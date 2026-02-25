
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Testchat from './pages/Testchat'

function App() {
  return (
    <div className="App">
         <h1>THANK YOU  PROJECT</h1>
         <BrowserRouter>

         <Routes>
             <Route path='/' element={<Login/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/register'element={<Register/>}/>
             <Route path='/testchat' element={<Testchat/>}/>
         </Routes>

         </BrowserRouter>
         
    </div>
  );
}

export default App;
