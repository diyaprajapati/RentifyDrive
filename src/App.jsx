import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login-signup/Login'
import Signup from './login-signup/Signup'
import Car from './car/Car'
import Home from './dashboard/Home';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path= '/' element= {<Login/>}/>
          <Route path= '/signup' element= {<Signup/>}/>
          <Route path='/car' element= {<Car/>}/>
          <Route path='/home' element= {<Home/>}/>
        </Routes>
      </BrowserRouter>

  )
}
