import React from 'react'
import { useState } from 'react'
import { registerUser } from '../services/UserService'
import { useNavigate } from 'react-router-dom'
import { validatePassword, validatePassword2 } from '../common-js/common'

export const RegisterComponent = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');
    const [id, setId] = useState('')
    const [createdDate, setCreatedDate] = useState(new Date())

    const [messageForRegistration, setMessageForRegistration] = useState()

    const [passValidationMessage, setPassValidationMessage] = useState()

    const navigator = useNavigate('');

    const [errors, setErrors] = useState({
        userName: '',
        password: ''
    })

    // bis user 1012 ==> user1012 with pass = pass1012
    // user: user1013 with pass = Pass1013$$
    function registerCustomer(e) {
        e.preventDefault();
        setMessageForRegistration('');

        //let validationPasswordMessage = validatePassword(password);
        let validationPasswordMessage = validatePassword2(password);
        setPassValidationMessage(validationPasswordMessage);

        if(validateLoginForm() && validationPasswordMessage.trim() === '') {

            const user = { id, userName, password, createdDate: new Date()};
            console.log(user);

            registerUser(user).then((response) => {
                console.log(response.data);
                setMessageForRegistration(response.data.loginMessage);
                if(response.data.status) {
                    console.log("=============successfully created====================>>>".concat(messageForRegistration));
                    navigator("/login");
                } else {                    
                    console.log("=============false====================>>>".concat(messageForRegistration));
                }
            }).catch((error) => {
                console.error(error);
            })
        }
    }

    function validateLoginForm() {
        let pageValid = true;
        const errorCopy = {... errors};

        if(userName.trim()) {
            errorCopy.userName = '';
        } else {
            pageValid = false;
            errorCopy.userName = "Enter User Name"
        }

        if(password.trim()) {            
            errorCopy.password = '';
        } else {
            pageValid = false;
            errorCopy.password = "Enter Password"
        }

        setErrors(errorCopy);
        return pageValid;
    }

  return (
    <div className='container'>

        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>                
                <h2 className='text-center'>Register Customer</h2>
                <div className='card-body'>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input 
                                type="text" 
                                className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                                id="inputUsername" 
                                name="inputUsernameName"
                                value={userName}
                                placeholder='Enter User Name'
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            {errors.userName && <div className='invalid-feedback'>{errors.userName}</div>}
                            
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input 
                                type="password" 
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                id="inputPassword" 
                                name='inputPasswordName'
                                value={password}
                                placeholder='Enter your Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
                        </div>
                        
                        <button className="btn btn-primary" onClick={registerCustomer}>Register</button>
                        { messageForRegistration && <div className='text-danger'>Feedback: {messageForRegistration}</div>}
                        { passValidationMessage && <div className='text-danger'>Pass Validation: {passValidationMessage}</div>}
                    </form>
                </div>    
            </div>
        </div>            

    </div>
  )
}
