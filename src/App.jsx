import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login-signup/Login'
import Signup from './login-signup/Signup'
import Car from './car/Car'
import Home from './dashboard/Home';
import Start from './main/Start';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path= '/' element= {<Start/>}/>
          <Route path= '/login' element= {<Login/>}/>
          <Route path= '/signup' element= {<Signup/>}/>
          <Route path='/car' element= {<Car/>}/>
          <Route path='/home' element= {<Home/>}/>
        </Routes>
      </BrowserRouter>

  )
}
