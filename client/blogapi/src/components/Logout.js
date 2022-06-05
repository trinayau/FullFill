import React, {useEffect} from 'react';
import axiosInstance from '../axios';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
    const response = axiosInstance.post('user/logout/blacklist/', {
        refresh_token: localStorage.getItem('refresh_token'),
    });
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    axiosInstance.defaults.headers['Authorization'] = null;
    navigate('/login');
    },[navigate]);

    return ( <div>Logout</div> );
}
 
export default Logout;
