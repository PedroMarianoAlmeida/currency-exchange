import React from 'react';
import currencyNames from './data-currency';

export let currentValueVariable = 'USD';
class UserInputCurrency extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentValue: currentValueVariable
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        currentValueVariable = e.target.value;
        this.setState({
            currentValue: currentValueVariable
        });
        this.props.updateUserInputCurrency(currentValueVariable);
    }

    render(){
        const nameElements = currencyNames.map( name => <option key={name}>{name}</option> );
        return (
            <select onChange={this.handleChange} value={this.state.currentValue}>
                {nameElements}    
            </select>
            )
        }    
}

export default UserInputCurrency;