import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ListEmployeeComponent = () => {
    
    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        init()
    },[])

    const API = 'http://employeemanagementapp-env.eba-chphimsc.ap-southeast-1.elasticbeanstalk.com/api/v1/employees'
    
    const init = async () => {
        try {
            const res = await axios.get(API)
            setEmployees(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const deleteEmployee = async (id) => {
        try {
            const res = await axios.delete(API+`/${id}`)
            console.log('Employee deleted successfully', res.data)
            init()
        } catch (err) {
            console.log(err)
        }
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
                                    <td>
                                        <Link className="btn btn-info" to={`/update-employee/${employee.id}`}>Update</Link>
                                        <div className="btn btn-danger" style={{marginLeft:10}} onClick={()=>{
                                            deleteEmployee(employee.id)
                                        }}>Delete</div>
                                    </td>
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
