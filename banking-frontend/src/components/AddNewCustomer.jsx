import React, { useEffect, useState } from 'react'
import { createCustomer, getCustomer, updateCustomer } from '../services/CustomerService'
import { useNavigate, useParams } from 'react-router-dom'

export const AddNewCustomer = () => {
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const {id} = useParams();

  const genderDefaultValue = 'Male';

  const navigator = useNavigate('');

  const [errors, setErrors ]= useState({
    firstName : '',
    lastName: '',
    email: '',
    dateOfBirth: ''
  })

  useEffect(() => {
    if(id) {
        getCustomer(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setGender(response.data.gender);
            setDateOfBirth(response.data.dateOfBirth);
        }).catch((error) => {
            console.error(error);
        })
    }
  }, [id])
  

  function saveOrUpdateCustomer(e) {
    e.preventDefault();
    
    if(validateForm()) {
        const customer = {firstName, lastName, email, gender, dateOfBirth};
        console.log(customer);

        if(id) {
            customer.id = id;
            updateCustomer(customer).then((response) => {
                console.log(response.data);
                navigator('/banking/customers');
            }).catch((error) => {
                console.error(error);
            })

        } else {
            createCustomer(customer).then((response) => {
                console.log(response.data);
                navigator('/banking/customers');
            }).catch((error) => {
                console.error(error);
            })
        }
        
    }
  }

  function validateForm() {
    let valid = true; 
    const errorsCopy = {... errors}

    if(firstName.trim()) {
        errorsCopy.firstName = '';
    } else {
        valid = false;
        errorsCopy.firstName = 'First Name is reguired!';
    }

    if(lastName.trim()) {
        errorsCopy.lastName = '';
    } else {
        valid = false;
        errorsCopy.lastName = 'Last Name is required!';
    }

    if(email.trim()) {
        errorsCopy.email = '';
    } else {
        valid = false;
        errorsCopy.email = 'Email is required!';
    }

    if(dateOfBirth.trim()) {
        errorsCopy.dateOfBirth = '';
    } else {
        valid = false;
        errorsCopy.dateOfBirth = 'Date of Birth is required!';
    }

    setErrors(errorsCopy);

    return valid;
  }

  function getTitle() {
    if(id) {
        return "Update Customer";
    } else {
        return "Add Customer";
    }
}

  
  
    return (
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>                
                <h2 className='text-center'>{getTitle()}</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input 
                                type='text'
                                name='firstName'
                                placeholder='Enter First Name'
                                id='inputFirstNameID'
                                value={firstName}
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                onChange={(e) => setFirstName(e.target.value)}
                                >
                            </input>
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}

                            <label className='form-label'>Last Name</label>
                            <input 
                                type='text'
                                name='lastName'
                                placeholder='Enter Last Name'
                                id='inputLastNameID'
                                value={lastName}
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                onChange={(e) => setLastName(e.target.value)}
                                >
                            </input>
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}

                            <label className='form-label'>Email</label>
                            <input 
                                type='email'
                                name='email'
                                placeholder='Enter Email'
                                id='inputEmailID'
                                value={email}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                                >
                            </input>
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            
                            {/* <br></br> */}
                            {/* <div className="input-group mb-3"> */}
                                {/* <div className="input-group-prepend"> */}
                                    <label className="form-label" style={{padding: 5}} >Gender:</label>
                                {/* </div> */}
                                <select className="form-select form-control form-control-sm" value={gender} style={{height: 20}} id="inputGroupSelectGender" onChange={(e) => setGender(e.target.value)}>                                    
                                    <option value="Male">Male</option>
                                    <option value="Famale">Famale</option>
                                </select>
                            {/* </div> */}

                            <label className='form-label' style={{padding: 5}} >Birthday:</label>
                            <input 
                                type="date" 
                                id="birthdayID" 
                                name="birthday" 
                                value={dateOfBirth}
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={(e) => setDateOfBirth(e.target.value)} >
                            </input>
                            {errors.dateOfBirth && <div className='invalid-feedback'>{errors.dateOfBirth}</div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateCustomer}>Submit</button>
                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

/* 
 <td>{customer.id}</td>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.email}</td>
                        <td>{customer.gender}</td>
                        <td>{customer.dateOfBirth}</td>
*/
