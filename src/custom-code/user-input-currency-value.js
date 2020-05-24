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

    componentDidMount(){
        this.setState({
            currentNumber: this.props.currentNumber
        })
    }

    render(){
        return (
            <input type='number' min='0' step='0.01' className='form-control d-inline w-25 h-100 text-center'
                 value={this.state.currentNumber} onChange={this.handleChange}></input>        

        )
    }

} 
export default CurrencyValue;