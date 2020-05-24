import React from 'react';

class CurrencyValueColumn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(e.target.value);
        this.setState({
            number: e.target.value
        })
        this.props.updateUserInputNumber(Number(e.target.value) / this.props.currencyRate );
    }

    componentDidMount(){
        this.setState({
            number: this.props.number,
        })
        console.log(this.state.number)
    }

    render(){
        return(
            <div>
                <input type='number' min='0' step='0.01' className='text-center d-block'
                onChange={this.handleChange}></input>  
            </div>
        )
    }
}

export default CurrencyValueColumn;