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
        //this.updateColumns = this.updateColumns.bind(this);
    }

    //Should be updated after NOTIFY runs in user-input-currency.js
    //updateColumns(columnOptions){
    //    this.setState({
    //        columns: columnOptions
    //    });
    //}

    render(){
        return(
            <th scope='col'>{columnOptions /*Not finished*/}</th>          
        )
        
    }
}

export default CurrencyColumns;