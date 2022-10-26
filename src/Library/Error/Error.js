import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='d-flex justify-content-center text-center mt-5'>
            <div>
            <h1 className='text-danger fw-bold fs-1'>404</h1>
            <h3>Page not found!!!</h3>
            <Button className='back-btn mt-3' variant="secondary"><Link to="/">Go to Home Page</Link>
            </Button>
            </div>
        </div>
    );
};

export default Error;