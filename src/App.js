import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import Clothes from './Components/Clothes';
import Footwear from './Components/Footwear';
import Watch from './Components/Watch';
import Glasses from './Components/Glasses';
import Signup from './Components/Signup';
import Login from './Components/Login';
import How from './Components/How';
import ContactUs from './Components/ContactUs';
import MobileNavbar from './Components/MobileNavbar';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
const [state, setstate] = useState(false)
const [width, setwidth] = useState(null)

  const clickHandler = () =>{
    setstate(!state)
  }
      useEffect(() => {
        const resize = () =>{
          setwidth(window.innerWidth)
          if (width > 700) {
            setstate(false)
          }
        }
        window.addEventListener('resize', resize)
        
      }, [width])

  return (
    
      <Router>
        <div className="App">
          <Navbar click={clickHandler} closeClick={()=> setstate(false)}></Navbar>
          {
            state && width <= 700 ? <MobileNavbar click={() => setstate(false)}></MobileNavbar>
            :
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/shop' render={(props) => <Shop {...props} width={width} ></Shop> }></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/clothes' component={Clothes}></Route>
            <Route path='/footwear' component={Footwear}></Route>
            <Route path='/watches' component={Watch}></Route>
            <Route path='/glasses' component={Glasses}></Route>
            <Route path='/signup' component={Signup}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/how' component={How}></Route>
            <Route path='/contactus' component={ContactUs}></Route>
          </Switch>
          }
          <Footer click={() => setstate(false)}></Footer>
        </div>
      </Router>
  );
}

export default App;
