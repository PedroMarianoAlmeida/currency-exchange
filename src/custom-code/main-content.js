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
            columnsCurrency: ['BRL', 'EUR', 'CAD', 'JPY', 'AUD']
        }
    }

    receiveInputUserData = (currency) => {
        let indexToRemove = currencyNames.indexOf(currency);
        let columnOptions = [...currencyNames];
        columnOptions.splice(indexToRemove, 1);       
        
        this.setState({
            currentCurrency: currency,
            columnsCurrency: columnOptions
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
                            <UserInputCurrency updateCurrentCurrency={this.receiveInputUserData}/>                            
                        </th>
                        {/*Just example to see the Table*/}
                        <td>0.56</td>
                        <td>4.57</td>
                        <td>1.23</td>
                        <td>5.32</td>
                        <td>7.78</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default MainContent;