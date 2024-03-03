import Navbar from '@/components/Navbar'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Template = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}

        </div>
    )
}

export default Template