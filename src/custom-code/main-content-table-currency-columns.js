import React from 'react';
import {currentValueVariable} from './user-input-currency';
import currencyNames from './data-currency';

let indexToRemove = currencyNames.indexOf(currentValueVariable);
let columnOptions = [...currencyNames];
columnOptions.splice(indexToRemove, 1);

class CurrencyColumns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: columnOptions
        };
    }
    render(){
        return(
            <th scope='col'>{columnOptions}</th>
        )
        
    }
}

export default CurrencyColumns;