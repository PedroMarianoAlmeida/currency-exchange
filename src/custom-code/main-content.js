import React from 'react';
import UserInputCurrency from './user-input-currency';
import CurrencyValue from './user-input-currency-value';
import CurrencyColumns from './main-content-table-currency-columns'
import currencyNames from './data-currency';

class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentCurrency: 'USD',
            columnsCurrency: ['BRL', 'EUR', 'CAD', 'JPY', 'AUD'],
            columnsRate: [],
            currentNumber: 1,
        }
    }

    newCollumnValues = function(currentyCurrency){
        let indexToRemove = currencyNames.indexOf(currentyCurrency);
        let columnOptions = [...currencyNames];
        columnOptions.splice(indexToRemove, 1);
        return columnOptions;
    }

    newRates = (currency, currenciesToRates) => {
        let allRates = [];
        
        fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${currency}`)
        .then(response => response.json() )
        .then( data => { 
            currenciesToRates.map( name => allRates.push(data.rates[name]) );
            this.setState ({
                columnsRate: allRates
            });
        });        
    }

    componentDidMount(){ //First load of information
        this.updateCurrentCurrency('USD');
    }

    updateCurrentCurrency = (currency) => {    
        const myCollumns = this.newCollumnValues(currency);
        this.newRates(currency, myCollumns);

        this.setState({
            currentCurrency: currency,
            columnsCurrency: myCollumns,
        });
    }

    updateUserInputNumber = (number) => {
        this.setState({
            currentNumber: number
        });
        console.log(number)
    }

    render(){
        return(
            <div>
                <div className='d-none d-lg-flex'> {/*Descktop version*/}
                    <table className="table mt-5 w-75">
                    <thead>
                            <CurrencyColumns currency={this.state.columnsCurrency}/>
                    </thead>

                    <tbody>
                        <tr>
                            <th scope="row"> 
                                <CurrencyValue updateUserInputNumber={this.updateUserInputNumber}/>
                                <UserInputCurrency updateUserInputCurrency={this.updateCurrentCurrency}/>                            
                            </th>
                            <td>{(this.state.columnsRate[0] * this.state.currentNumber).toFixed(2)}</td>                     
                            <td>{(this.state.columnsRate[1] * this.state.currentNumber).toFixed(2)}</td> 
                            <td>{(this.state.columnsRate[2] * this.state.currentNumber).toFixed(2)}</td> 
                            <td>{(this.state.columnsRate[3] * this.state.currentNumber).toFixed(2)}</td> 
                            <td>{(this.state.columnsRate[4] * this.state.currentNumber).toFixed(2)}</td> 
                        </tr>
                    </tbody>
                    </table>
                </div>

                <div className="d-lg-none flex-grow-1"> {/*Mobile version*/}
                    <table className="table mt-5 w-75">
                        <thead>
                            <tr>
                                <th scope='col'> <CurrencyValue updateUserInputNumber={this.updateUserInputNumber}/> </th>
                                <th scope='col'> <UserInputCurrency updateUserInputCurrency={this.updateCurrentCurrency} /> </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope='row'>{this.state.columnsCurrency[0]}</th>
                                <td>{(this.state.columnsRate[0] * this.state.currentNumber).toFixed(2)}</td>
                            </tr>
                            
                            <tr>
                                <th scope='row'>{this.state.columnsCurrency[1]}</th>
                                <td>{(this.state.columnsRate[1] * this.state.currentNumber).toFixed(2)}</td>
                            </tr>

                            <tr>
                                <th scope='row'>{this.state.columnsCurrency[2]}</th>
                                <td>{(this.state.columnsRate[2] * this.state.currentNumber).toFixed(2)}</td>
                            </tr>

                            <tr>
                                <th scope='row'>{this.state.columnsCurrency[3]}</th>
                                <td>{(this.state.columnsRate[3] * this.state.currentNumber).toFixed(2)}</td>
                            </tr>

                            <tr>
                                <th scope='row'>{this.state.columnsCurrency[4]}</th>
                                <td>{(this.state.columnsRate[4] * this.state.currentNumber).toFixed(2)}</td>
                            </tr>

                        </tbody>

                    </table>
                </div>

            </div>
            
        )
    }
}

export default MainContent;