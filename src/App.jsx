import React from "react"
import { Suspense } from "react"
import {BrowserRouter as Router , Routes, Route, Link} from "react-router-dom"
import "./App.css"


const Home = React.lazy(()=> import("../component/lazyLoading/home"))
const Contact = React.lazy(()=> import("../component/lazyLoading/contact"))
const Help = React.lazy(()=> import('../component/lazyLoading/Help'))

const App = () =>{
    return(
        <>
            <Router>
                <nav>
                    <Link to="/">HOME</Link>{"  "}
                    <Link to="/contact">CONTACT</Link>{"  "}
                    <Link to="/help">HELP</Link>
                    
                </nav>
               <Suspense fallback={<p style={{color : "pink"}}>Loding...</p>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/help" element={<Help/>}/>
                    
                </Routes>
               </Suspense>
            </Router>
        </>
    )
}

export default App;