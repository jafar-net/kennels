import React, { useState, useEffect } from 'react';
//import the components we will need
import { EmployeeCard } from './EmployeeCard';
import { getAllEmployees, getEmployeeById } from '../../modules/EmployeeManager';
import { deleteEmployee } from '../../modules/EmployeeManager';

export const EmployeeList = () => {
  console.log("EmployeeList Invoked")
	const [employees, setEmployees] = useState([])

  const handleDeleteEmployee = id => {
    deleteEmployee(id)
    .then(() => getAllEmployees().then(setEmployees));
};

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllEmployees().then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {employees.map(employee =>
        <EmployeeCard
          key={employee.id}
          employee={employee}
          handleDeleteEmployee={handleDeleteEmployee} />)}
    </div>
  );
};
