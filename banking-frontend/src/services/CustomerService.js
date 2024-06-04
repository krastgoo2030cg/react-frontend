import axios from "axios";

const CUSTOMER_BASE_URL = "http://localhost:8088/banking/customers";

export const customerList = () => axios.get(CUSTOMER_BASE_URL);

export const createCustomer = (customer) => axios.post(CUSTOMER_BASE_URL, customer);

export const getCustomer = (id) => axios.get(CUSTOMER_BASE_URL + '/' + id);

export const updateCustomer = (customer) => axios.put(CUSTOMER_BASE_URL, customer);

export const removeCustomer = (id) => axios.delete(CUSTOMER_BASE_URL + '/' + id);


// regex to match the phone number       

// create a function that takes a string and return it backwards


