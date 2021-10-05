import React, {useState} from "react"
import "./Kennel.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

const isAdmin = true;

//object being passed
const myUser = {
    name: "Ben",
    paramore: "Riley"
}

export const Kennel = () => {
    const [isAuthenticated,setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !==null)
    
    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
      }
    
    return (
    <>
        <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        <ApplicationViews isAdmin={isAdmin} myUser={myUser} setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
        
    </>
)}
