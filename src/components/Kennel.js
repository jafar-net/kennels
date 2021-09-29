import React from "react"
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
    return (
    <>
        <NavBar />
        <ApplicationViews isAdmin={isAdmin} myUser={myUser}/>
        
    </>
)}