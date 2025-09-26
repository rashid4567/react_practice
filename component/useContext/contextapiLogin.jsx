import React, { createContext, use, useContext, useState } from "react";
import "./App.css"
const AuthContext = createContext();
const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    const Login = (name) =>{
        setUser({name})
    }
    const Logout = ()=>{
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{user,Login,Logout}}>
            {children}
        </AuthContext.Provider>
    )
 }
 
 const useAuth = () => useContext(AuthContext);

 const NavBar = () =>{
    const {user,Login,Logout} = useAuth();
    return(
        <div>
            {user ? 
            <>
            <p>Welcome {user.name}</p>
            <br />
            <button onClick={Logout}>Logout</button>
            </>  :
            <>
            <p>Please login</p>
            <button onClick={()=>Login('Rashid')}>Login</button>
            </>
        }
        </div>
    )
 }

 const App = () =>{
    return(
        <AuthProvider>
            <NavBar/>
        </AuthProvider>
    )
 }

 export default App;