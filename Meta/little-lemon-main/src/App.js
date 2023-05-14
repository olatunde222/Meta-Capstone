import './App.css';
import { useReducer } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home/Home";
import About from "./pages/aboutus/AboutUs";
import Menu from "./pages/menu/Menu"
import Reservation from "./pages/reservation/Reservation";
import Order from "./pages/Order";
import Auth from "./pages/auth/Auth";
import {Route, Routes, useNavigate} from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Confirmation from "./pages/reservation/Confirmation";

export const initializeTimes = () => {
  const date = new Date();
  const response = fetchAPI(date);
  return response;
}
const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());
  for(let i = 17; i <= 23; i++) {
    if(random() < 0.5) {
      result.push(i + ':00');
    }
    if(random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

const submitAPI = function(formData) {
  return true;
};

export function App() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  function updateTimes(state, action){
      if(action.type === 'update'){
          const date = new Date(action.date);
          state = fetchAPI(date);
      }

      return state;
  }

  function submitForm(formData){
      const response = submitAPI(formData);
      if(response === true){
          navigate('/confirmation');
      }
  }

  return (
    <>
    <ChakraProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/reservation' element={<Reservation submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch}/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/confirmation' element={<Confirmation/>}></Route>
        </Routes>
        <Footer/>
      </ChakraProvider>






    </>
  )
}

export default App;
