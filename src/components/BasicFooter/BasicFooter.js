import React from 'react';
import './BasicFooter.css'

const BasicFooter = () => {

    const external_url='http://www.google.com';

    return (
        <footer className="BasicFooter">
            <a href={external_url}>&copy; DCU ICS Lab. All Rights Reserved.</a>
        </footer>
    );
};

export default BasicFooter;