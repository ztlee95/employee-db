import React, {useState} from 'react'

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  
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
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddEmployeeComponent
