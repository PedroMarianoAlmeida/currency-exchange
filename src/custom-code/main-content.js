import React from 'react';
import UserInputCurrency from './user-input-currency';
import CurrencyValue from './user-input-currency-value';
import CurrencyColumns, {CurrencyColumns2} from './main-content-table-currency-columns'

class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentCurrency: 'USD'
        }
    }

    receiveInputUserData = (currency) => {
        this.setState({
            currentCurrency: currency
        });
    }

    render(){
        //declarar variáveis antes
        return(
            <table className="table mt-5 w-75">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <CurrencyColumns currency={this.state.currentCurrency}/>
                    </tr>
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