import React, { Suspense } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css";

const Home = React.lazy(()=> import("../lazyLoading/home"));
const Help = React.lazy(()=> import("../lazyLoading/Help"));
const Contact = React.lazy(()=> import("../lazyLoading/contact"))

const App = () =>{
    return(
        <Router>
            <nav>
                <Link to="/">HOME</Link>{" "}
                <Link to="/About">ABOUT</Link>{"  "}
                <Link to="/contact">CONTACT</Link>
            </nav>
            <Suspense fallback={<h2>loading...</h2>}>
                 <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element = {<Help/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            </Suspense>
        </Router>
    )
}

export default App;