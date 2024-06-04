import React, { useEffect } from 'react'
import { useState } from 'react'
import { customerList } from '../services/CustomerService'
import { useNavigate } from 'react-router-dom'
import { removeCustomer } from '../services/CustomerService'

export const CustomerComponent = () => {

    const [customers, setCustomers] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllCustomers();
    }, [])

    function getAllCustomers() {
        customerList().then((response) => {
            setCustomers(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    function addNewCustomer() {
        navigator('/add-customer');
    }

    function updateCustomer(id) {
        navigator(`/update-customer/${id}`);
    }

    function deleteCustomer(id) {
        console.log("=========in deleteCustomer=========id==>>>: " + id);
        removeCustomer(id).then((response) => {
            console.log(response.data);
            getAllCustomers();
        }).catch((error) => {
            console.log(error);
        })
    }


  return (
    <div className='container'>

        <h2 className='text-center text-info'>List of Customers</h2>

        <button className='btn btn-primary mb-2' onClick={addNewCustomer}>New Customer</button>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Date of Birth</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map(customer => 
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.email}</td>
                        <td>{customer.gender}</td>
                        <td>{customer.dateOfBirth}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateCustomer(customer.id)}>Update</button>
                            <button className='btn btn-danger' style={{marginLeft: 10}}  onClick={() => deleteCustomer(customer.id)}>Delete</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
    </table>
    </div>
  )
}


/**
 * 
 const dummyData = [
        {
            "id":1,
            "firstName":"FirstName1",
            "lastName":"lastName1",
            "email":"email1@gmx.de",
            "gender":"male",
            "dateOfBirth":"10.10.1996"
        },
        {
            "id":2,
            "firstName":"FirstName2",
            "lastName":"lastName2",
            "email":"email2@gmx.de",
            "gender":"male",
            "dateOfBirth":"11.10.1996"
        },
        {
            "id":3,
            "firstName":"FirstName3",
            "lastName":"lastName3",
            "email":"email3@gmx.de",
            "gender":"male",
            "dateOfBirth":"12.10.1996"
        }
    ]
 */
