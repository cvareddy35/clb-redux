import React from 'react'

export function EmpDetails(props) {

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">
          Employee Details with id : {props.employee.id}
        </div>
        <div className="description">
          <p><strong>Emp No: </strong> {props.employee.empNo}</p>
          <p><strong>First Name: </strong> {props.employee.firstName}</p>
          <p><strong>Last Name: </strong> {props.employee.lastName}</p>
          <p><strong>City: </strong> {props.employee.city}</p>
        </div>
      </div>
      
    </div>
  )
}