import React from 'react'
import { useState } from 'react'
import { loginUser } from '../services/UserService'
import { useNavigate } from 'react-router-dom'

export const LoginComponent = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');
    const [id, setId] = useState('')
    const [createdDate, setCreatedDate] = useState('')
    const [messageForLogin, setMessageForLogin] = useState()

    const navigator = useNavigate('');

    const [errors, setErrors] = useState({
        userName: '',
        password: ''
    })

    function loginCustomer(e) {
        e.preventDefault();
        setMessageForLogin('');

        if(validateLoginForm()) {

            const user = { id, userName, password, createdDate};
            console.log(user);

            loginUser(user).then((response) => {
                console.log(response.data);
                setMessageForLogin(response.data.loginMessage);
                if(response.data.status) {
                    navigator("/banking/customers");
                } else {
                    console.log("=============false====================".concat(messageForLogin));
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
                <h2 className='text-center'>Login Customer</h2>
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
                        
                        <button className="btn btn-primary" onClick={loginCustomer}>Login</button>
                        { messageForLogin && <div className='text-danger'>Feedback: {messageForLogin}</div>}                        
                        <div>
                            <a href="/register">Go To Register Account</a>
                        </div>
                        
                    </form>



                </div>    
            </div>
        </div>            

    </div>
  )
}
