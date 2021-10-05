import React, {useState} from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CustomerList } from "./customer/CustomerList"
import {LocationList} from "./location/LocationList"
import { NavBar } from "./nav/NavBar"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from './animal/AnimalForm'
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Redirect } from "react-router"
import { AnimalEditForm } from "./animal/AnimalEditForm"

export const ApplicationViews = ( {isAdmin, myUser, setAuthUser, isAuthenticated} ) => {

    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} myUser={myUser}/>
            </Route>

            <Route exact path="/">
                <NavBar />
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
  {isAuthenticated ? <AnimalDetail />:
 <Redirect to="/login" />
  }
</Route>


            <Route path="/customers">
              <CustomerList />
            </Route>

            <Route path="/locations">
              <LocationList />
            </Route>

            <Route path="/employees">
              <EmployeeList />
            </Route>

            <Route path="/animals/create">
            <AnimalForm />
          </Route>

          <Route path="/animals/:animalId(\d+)/edit">
            {isAuthenticated ? <AnimalEditForm />: <Redirect to="/login" />
            }
          </Route>

          <Route exact path="/animals">
          {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
          	<Login setAuthUser={setAuthUser}/>
          </Route>

          <Route path="/register">
          	  <Register setAuthUser={setAuthUser}/>
          </Route>
        </>
    )
}


