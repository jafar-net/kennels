import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CustomerList } from "./customer/CustomerList"
import { LocationCard } from "./location/LocationCard"
import { EmployeeCard } from "./employee/EmployeeCard"
import { NavBar } from "./nav/NavBar"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = ( {isAdmin, myUser} ) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} myUser={myUser}/>
            </Route>

            <Route exact path="/">
                <NavBar />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList />
            </Route>

            <Route path="/customers">
              <CustomerList />
            </Route>

            <Route path="/locations">
              <LocationCard />
            </Route>

            <Route path="/employees">
              <EmployeeCard />
            </Route>
        </>
    )
}
