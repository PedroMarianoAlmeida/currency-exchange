import React from 'react';

let CurrencyValue = function() {
    return (
            <div className='d-flex justify-content-center my-2'>
                <input type='number' min='0' step='0.01' className='form-control w-25'></input>        
            </div>
    )
}

export default CurrencyValue;