import './App.css'
import { Test1Component } from './TestPages/Test1Component'
import { AddNewCustomer } from './components/AddNewCustomer'
import { CustomerComponent } from './components/CustomerComponent'
import { FooterComponent } from './components/FooterComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginComponent } from './components/LoginComponent'
import { RegisterComponent } from './components/RegisterComponent'

function App() {

  return (
    <>
    <BrowserRouter>

      {/* <h1  className='text-center'>Banking Application</h1> */}
      {/* <Test1Component /> */}
      <HeaderComponent />
      <Routes>

        {/* http://localhost:3001/register */}
        <Route path='/register' element={<RegisterComponent />}></Route>

        {/* http://localhost:3001/login */}
        <Route path='/login' element={<LoginComponent />}></Route>

        {/* http://localhost:3001/ */}
        <Route path='/' element={<CustomerComponent />}></Route>

        {/* http://localhost:3001/banking/customers */}
        <Route path='/banking/customers' element={<CustomerComponent/>}></Route>

        {/* http://localhost:3001/test-page */}
        <Route path='/test-page' element={<Test1Component/>}></Route>

        {/* http://localhost:3001/add-customer */}
        <Route path='/add-customer' element={<AddNewCustomer/>}></Route>

         {/* http://localhost:3001/update-customer/1 */}
         <Route path='/update-customer/:id' element={<AddNewCustomer/>}></Route>

      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
