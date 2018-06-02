import React, { Component } from 'react'
import { EmpDetails } from './emp-details';
import { EmpForm } from './emp-form';

export default class EmpList extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      employees: [
        {
          id: 1,
          empNo: 'CLB123',
          firstName: 'LP Shivan',
          lastName: 'Venkat',
          city: 'Trivandrum',
          photoUrl: 'https://picsum.photos/200/300?random'
        },
        {
          id: 2,
          empNo: 'CLB125',
          firstName: 'Ravikumar',
          lastName: 'GopalSwamy',
          city: 'Chicago',
          photoUrl: 'https://picsum.photos/200/300?random'
        },
        {
          id: 3,
          empNo: 'CLB126',
          firstName: 'Nanda',
          lastName: 'PS',
          city: 'London',
          photoUrl: 'https://picsum.photos/200/300?random'
        }
      ],
      latestId: 4,
      selectedEmployee: null
    };
 
  }

  showDetails = (selectedEmployee) => {
    console.log(selectedEmployee);
    this.setState({
      selectedEmployee: selectedEmployee
    })
  }

  addEmployee = (empObj) => {

    //newEmployee.id = this.state.latestId;
    let newEmployee = Object.assign({}, empObj, {id: this.state.latestId});
    
    let newList = [...this.state.employees, newEmployee];
    this.setState({
      employees: newList,
      latestId: this.state.latestId + 1
    });
  }

  render() {
    const title = <h3> List of Employees </h3>;
    const empRows = this.state.employees.map(e => {
                              return (
                                <tr key={e.id}>
                                  <td>{e.id}</td>
                                  <td>{e.empNo}</td>
                                  <td>{e.firstName}</td> 
                                  <td>{e.lastName}</td>
                                  <td>{e.city}</td>
                                  <td>
                                    <button className="ui basic blue button"
                                            onClick={() => this.showDetails(e)}>
                                      Show Details
                                    </button>
                                  </td>
                                </tr>
                              )
                            });

    return (
      <div>
        {title}
        <table className="ui blue table striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Emp No</th> 
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {empRows}
          </tbody>
        </table>
        <div className="ui divided two column grid">
          <div className="row">
            <div className="column">
              <EmpForm addEmployee={this.addEmployee}/>
            </div>
            <div className="column">
            {
              this.state.selectedEmployee && 
              <EmpDetails employee={this.state.selectedEmployee} />
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
