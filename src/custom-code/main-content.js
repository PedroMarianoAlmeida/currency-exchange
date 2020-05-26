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
        const cellsTableCurrency = this.state.columnsCurrency.map ( (currency, index) => {
            return(
                <tr key={currency}>
                    <th scope='row'>{currency}</th>
                    <td className='text-center'> {(this.state.columnsRate[index] * this.state.currentNumber).toFixed(2)}</td>
                    <td><CurrencyValueColumn updateUserInputNumber={this.updateUserInputNumber} currencyRate={this.state.columnsRate[index]}/></td>                  
                </tr>
            )
        });
        
        return(
            <div>
                <div className="flex-grow-1"> {/*Mobile version*/}
                    <table className="table mt-5 w-75">
                        <thead>
                            <tr>
                                <th scope='col'>Currency</th>
                                <th scope='col' className='text-center'>
                                    <h6>Change Base</h6>
                                    <CurrencyValue updateUserInputNumber={this.updateUserInputNumber}/>
                                    <UserInputCurrency updateUserInputCurrency={this.updateCurrentCurrency} allCurrencies={this.state.columnsCurrency}/>
                                </th>
                                <th scope='col'>
                                    <h6>Change Exchange Value</h6>
                                    <div>{(Number(this.state.currentNumber)).toFixed(2)}</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {cellsTableCurrency}
                        </tbody>

                    </table>
                </div>
            </div>
            
        )
    }
}

export default MainContent;