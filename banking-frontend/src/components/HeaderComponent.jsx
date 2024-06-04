import React from 'react'

export const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className="navbar navbar-dark bg-primary">
                <div className='nav-as-grid'>
                    <a className="navbar-brand" style={{marginLeft:50}} href="/login">login</a>
                    <a className="navbar-brand" href="/banking/customers">Customer Management</a>
                    <a className="navbar-brand" href="/test-page">Test Page 1</a>
                    <a className="navbar-brand" href="/add-customer">New Customer</a>
                </div>    
            </nav>
        </header>   
    </div>
  )
}
