import React from 'react';

const Shipment = () => {
    return (
        <div>
            <h1>Details your shipment</h1>
            <form className='formField' >
                <input type="text" name="name" id="" placeholder='Name' />
                <input type="email" name="email" id="" placeholder='Email' />
                <input type="password" name="password" id="" placeholder='Password' />
                <input  type="password" name="confirmPassword" placeholder='Confirm password' id="" />
                <input type="submit" value="add" />
            </form>
        </div>
    );
};

export default Shipment;