import React from 'react';
import currencyNames from './data-currency';

class CurrencyColumns extends React.Component {
    constructor(props) {
        super(props);
    }

    myColumns(currency){
        let indexToRemove = currencyNames.indexOf(currency);
        let columnOptions = [...currencyNames];
        columnOptions.splice(indexToRemove, 1);
        return columnOptions;
    }

    render(){
        return(
            this.myColumns(this.props.currency).map( name => <th scope='col'>{name}</th>)      
        )
        
    }
}

export default CurrencyColumns;