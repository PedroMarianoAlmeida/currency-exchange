import React from 'react';
import UserInputCurrency from './user-input-currency';
import CurrencyValue from './user-input-currency-value';
import CurrencyColumns from './main-content-table-currency-columns'
import currencyNames from './data-currency';
import CurrencyValueColumn from './main-content-currency-value';

class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentCurrency: 'USD',
            columnsCurrency: [],
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
        fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${currency}`)
        .then(response => response.json() )
        .then( data => { 
            const allCurrencies = [];
            const allRates = [];
            for(let [key, value] of Object.entries(data.rates)){
                allCurrencies.push(key);
                allRates.push(value);
            }

            currenciesToRates.map( name => allRates.push(data.rates[name]) );
            this.setState ({
                columnsCurrency: allCurrencies,
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
    }

    render(){
        return(
            <div>
                <div className='d-none'> {/*Descktop version*/}
                    <table className="table mt-5 w-75">
                    <thead>
                            <CurrencyColumns currency={this.state.columnsCurrency}/>
                    </thead>

                    <tbody>
                        <tr>
                            <th scope="row"> 
                                <div>
                                    <CurrencyValue updateUserInputNumber={this.updateUserInputNumber} currentNumber={this.state.currentNumber}/>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <UserInputCurrency updateUserInputCurrency={this.updateCurrentCurrency}/>                            
                                </div>
                            </th>
                            <td> <CurrencyValueColumn number={this.state.columnsRate[0] * this.state.currentNumber} updateUserInputNumber={this.updateUserInputNumber} rate={this.state.columnsRate[0]}/>  </td>                   
                            <td>{(this.state.columnsRate[1] * this.state.currentNumber).toFixed(2)}</td> 
                            <td>{(this.state.columnsRate[2] * this.state.currentNumber).toFixed(2)}</td> 
                            <td>{(this.state.columnsRate[3] * this.state.currentNumber).toFixed(2)}</td> 
                            <td>{(this.state.columnsRate[4] * this.state.currentNumber).toFixed(2)}</td> 
                        </tr>
                    </tbody>
                    </table>
                </div>

                <div className="flex-grow-1"> {/*Mobile version*/}
                    <table className="table mt-5 w-75">
                        <thead>
                            <tr>
                                <th scope='col'>Currency</th>
                                <th scope='col'>
                                    <h6>Change Base</h6>
                                    <CurrencyValue updateUserInputNumber={this.updateUserInputNumber}/>
                                    <UserInputCurrency updateUserInputCurrency={this.updateCurrentCurrency}/>
                                </th>
                                <th scope='col'>
                                    <h6>Change Exchange Value</h6>
                                    <div>{(Number(this.state.currentNumber)).toFixed(2)}</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope='row'>{this.state.columnsCurrency[0]}</th>
                                <td>{(this.state.columnsRate[0] * this.state.currentNumber).toFixed(2)}</td>
                                <CurrencyValueColumn updateUserInputNumber={this.updateUserInputNumber} currencyRate={this.state.columnsRate[0]}/>
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