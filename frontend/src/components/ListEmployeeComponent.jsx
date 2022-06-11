import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getEmployees()
    },[])

    const getEmployees = async () => {
        const res = await fetch("http://localhost:8080/api/v1/employees")
        const data = await res.json() 
        setEmployees(data)
    }

    const navigateAddEmployee = () => {
        navigate('/add-employee')
    }
    
    return (
        <div className="container">
            <h2 className="text-center">Employees List</h2>
            <div><button className="btn btn-primary" onClick={navigateAddEmployee}>Add Employee</button></div>
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
                    <tbody>
                        {
                            employees?.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent
