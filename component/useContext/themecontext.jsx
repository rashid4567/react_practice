import React, { createContext, useContext, useState } from "react";
import "./App.css";


const ThemeContext = createContext();
const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('light');
    const toggleTheme = () =>{
        setTheme(()=> theme === "light" ? "dark" : "light");
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
const Child = () =>{
    const {theme} = useContext(ThemeContext);
    return(
        <div style={{height : "200px", padding : '20px', color : theme === "dark" ? 'white' : "black" , backgroundColor : theme === 'dark' ? 'black' : "white"}}>
            <h2>theme : {theme}</h2>
        </div>
    )
}

const ThemeChanger = () =>{
    const {theme , toggleTheme} = useContext(ThemeContext)
    return(
        <div>
            <button onClick={toggleTheme}>switt to {theme} Mode</button>
        </div>
    )
}

const App = ()=>{
    return(
        <ThemeProvider>
            <Child/>
            <ThemeChanger/>
        </ThemeProvider>
    )
}

export default App;