import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router'

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  
  const {id} = useParams()
  
  useEffect(()=>{
    if (id) {
      getEmployee(id)
    }
  },[])

  const getEmployee = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/employees/${id}`)
      const employee = res.data
      setFirstName(employee.firstName)
      setLastName(employee.lastName)
      setEmail(employee.email)
    } catch(err){
      console.log(err)
    }
  }

  const submitEmployee = (e) => {
    e.preventDefault()
    const employee = {firstName, lastName, email, id} 
    if(id){
      updateEmployee(employee)
    }else{
      addEmployee(employee)
    }
  }

  const updateEmployee = async (employee) => {
    try {
      const res = await axios.put("http://localhost:8080/api/v1/employees", employee)
      console.log(res.data)
    } catch(err){
      console.log(err)
    }
  }
  const addEmployee = async (employee) => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/employees", employee)
      console.log(res.data)
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className="container">
      <h3 className="mt-4">Add New Employee</h3>
      <hr style={{height:'2px', backgroundColor:"#080808"}}/>
      <form>
        <div className="input-group col-4 mb-3">
          <input 
            type="text" 
            className="form-control" 
            id="firstName" 
            value={firstName}
            placeholder="Enter first name"
            onChange={(e)=> {
              setFirstName(e.target.value)
            }}
          /> 
        </div>
        <div className="input-group col-4 mb-3">
          <input 
            type="text" 
            className="form-control" 
            id="lastName" 
            value={lastName}
            placeholder="Enter last name"
            onChange={(e)=> {
              setLastName(e.target.value)
            }}
          /> 
        </div>
        <div className="input-group col-4 mb-3">
          <input 
            type="text" 
            className="form-control" 
            id="email" 
            value={email}
            placeholder="Enter email name"
            onChange={(e)=> {
              setEmail(e.target.value)
            }}
          /> 
        </div>
        <div>
          <button className="btn btn-primary" onClick={submitEmployee}>Submit</button>
          <Link className="btn btn-secondary" to="/" style={{marginLeft:10}}>Back</Link>
        </div>
      </form>
    </div>
  )
}

export default AddEmployeeComponent
