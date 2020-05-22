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
            columnsRate: ['teste', 2, 3, 4, 5],
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
            console.log(allRates);
            this.setState ({
                columnsRate: allRates
            });
        });        
    }

    updateCurrentCurrency = (currency) => {    
        const myCollumns = this.newCollumnValues(currency);
        this.newRates(currency, myCollumns);

        this.setState({
            currentCurrency: currency,
            columnsCurrency: myCollumns,
        });
    }

    render(){
        return(
            <table className="table mt-5 w-75">
                <thead>
                        <CurrencyColumns currency={this.state.columnsCurrency}/>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row"> 
                            <CurrencyValue />
                            <UserInputCurrency updateUserInputCurrency={this.updateCurrentCurrency}/>                            
                        </th>
                        <td>{this.state.columnsRate[0]}</td>                        
                        <td>{this.state.columnsRate[1]}</td>
                        <td>{this.state.columnsRate[2]}</td>  
                        <td>{this.state.columnsRate[3]}</td>  
                        <td>{this.state.columnsRate[4]}</td>    
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default MainContent;