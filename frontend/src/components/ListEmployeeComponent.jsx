import React, {useState} from 'react'

const ListEmployeeComponent = () => {
  
    const [employees, setEmployees] = useState(null)

    return (
        <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {
                        employees?.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody> */}
            </table>
        </div>
        </div>
    )
}

export default ListEmployeeComponent
