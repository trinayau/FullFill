import React, {useContext, useEffect} from 'react';
import axiosInstance from '../utils/axios';
import {useNavigate} from 'react-router-dom'
import AuthContext from "../context/AuthContext";

const Logout = () => {
    const navigate = useNavigate();
    let {setUser} = useContext(AuthContext)
    useEffect(() => {
    const response = axiosInstance.post('user/logout/blacklist/', {
        refresh_token: localStorage.getItem('refresh_token'),
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    axiosInstance.defaults.headers['Authorization'] = null;
    setUser(null)
    navigate('/login');
    },[navigate]);

    return ( <div>Logout</div> );
}
 
export default Logout;
