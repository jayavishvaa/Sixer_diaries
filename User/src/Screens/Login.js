import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import {toast} from 'react-toastify';

const Login = () => {

    const { data, setData } = useState([]);

    const loadDate = async () => {

        const response = await axios.get('http://localhost:3001/api/get');
        setData(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        loadDate();
    },[])

    return (
        <div style={{marginTop:'5%'}}>
            Hello JVJ
        </div>
    );
};

export default Login;
