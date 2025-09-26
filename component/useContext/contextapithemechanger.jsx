import React, { createContext, useContext, useState } from "react";
import './App.css';

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState('light');

    const toggleTheme = () =>{
        setTheme((prev)=> (prev === 'light' ? 'dark' : 'light'))
    }
    
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const Navbar = () =>{
    const {theme, toggleTheme} = useContext(ThemeContext);
    return(
        <nav style={{padding: "10px" , color : theme === 'dark' ? 'white' : 'black', backgroundColor : theme === 'dark' ? 'black' : 'white'}}>
            <h3>My app</h3>
            <button onClick={toggleTheme}>swith to {theme === 'dark' ? 'dark' : 'light'} mode</button>
            
        </nav>
    )
}

const Content = ()=>{
    const {theme} = useContext(ThemeContext);
    return(
        <div style={{padding:"20px", height:"200px", background : theme === "dark" ? "black" : 'white', color : theme === 'dark' ? 'white' : 'black'}}>
                <h3>The current mode is {theme === "dark" ? 'Dark mode' : 'Light mode'}</h3>
        </div>
    )
}

const App = () =>{
    return(
        <ThemeProvider>
            <Navbar/>
            <Content/>
        </ThemeProvider>
    )
}

export default App;