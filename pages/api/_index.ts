import axios from 'axios';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post('https://fakestoreapi.com/auth/login', { username, password });
    return response.data; 
  } catch (error) {
    throw new Error('Login failed'); 
  }
};

// {
//     "username": "johnd",
//     "password": "m38rmF$"
// }