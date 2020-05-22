import React from 'react';

class CurrencyValue extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentNumber: 1
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const currentNumber = e.target.value;
        this.setState({
            currentNumber: currentNumber
        });
        this.props.updateUserInputNumber(currentNumber);
    }

    render(){
        return (
            <div className='d-flex justify-content-center my-2'>
                <input type='number' min='0' step='0.01' className='form-control w-25 text-center'
                 value={this.state.currentNumber} onChange={this.handleChange}></input>        
            </div>
        )
    }

} 
export default CurrencyValue;