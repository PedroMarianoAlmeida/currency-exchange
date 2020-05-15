import React from 'react';
import CurrencyOptions from './user-input-currency-options';

class UserInputCurrency extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <CurrencyOptions />
        )
    }
}

export default UserInputCurrency;