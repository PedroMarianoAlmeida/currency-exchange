import React from 'react';
import currencyNames from './data-currency';

const CurrencyOptions = function(){
    const Names = currencyNames.map( (name) => <option>{name}</option>);
    //Parei aqui
    return (
        <select>
            {/*<Names />*/}
            <option>CUR1</option>
            <option>CUR2</option> 
            <option>CUR3</option> 
            <option>CUR4</option> 
            <option>CUR5</option> 
            
        </select>
    )
}

export default CurrencyOptions;