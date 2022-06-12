import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
const ListEmployeeComponent = () => {
    
    const [employees, setEmployees] = useState([])
    
    // if want useNavigate vs Link
    // const navigate = useNavigate()
    // const navigateAddEmployee = () => {
    //     navigate('/add-employee')
    // }

    useEffect(()=>{
        getEmployees()
    },[])

    const getEmployees = async () => {
        const res = await fetch("http://localhost:8080/api/v1/employees")
        const data = await res.json() 
        setEmployees(data)
    }

    
    return (
        <div className="container">
            <h2 className="text-center mt-2">Employees List</h2>
            <hr style={{height:'2px', backgroundColor:"#080808"}}/>
            <div>
                <Link className="btn btn-primary mb-2" to="/add-employee">Add Employee</Link>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
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
