import axios from "axios";

const USER_BASE_LOGIN_URL = "http://localhost:8088/banking/login";
const USER_REGISTER_URL = "http://localhost:8088/banking/users/create";


export const loginUser = (user) => axios.post(USER_BASE_LOGIN_URL, user);
export const registerUser = (user) => axios.post(USER_REGISTER_URL, user);





// q: what is the difference between a class and Object






// const USER_BASE_URL = "http://localhost:8088/banking/users";
// export const getAllUsers = () => axios.get(USER_BASE_URL);
// export const getUserById = (id) => axios.get(USER_BASE_URL + '/' + id);

// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

// export const loginUser = (user) => axios.get(USER_BASE_LOGIN_URL , 
//     {
//         headers: 
//             {'Content-Type': 'application/json', 'Accept': 'application/json'},
//             data: user
//     }
// );

//axios.get("https://api.url.com", {headers: {'Content-Type': 'application/json'} 

//{headers: {'Content-Type': 'application/json'}, data: user}

// axios.delete(URL, {
//     headers: {
//       'Accept': 'application/json'
//     },
//     data: del
//   });

//export const loginUser = (user) => axios.get(USER_BASE_LOGIN_URL, user);  // AxiosError {message: 'Request failed with status code 400', name: 'AxiosError', code: 'ERR_BAD_REQUEST'

//export const loginUser = (user) => axios.get(USER_BASE_LOGIN_URL , {headers: {'Accept': 'application/json'}, data: user}); //AxiosError {message: 'Request failed with status code 400', name: 'AxiosError', code: 'ERR_BAD_REQUEST',

