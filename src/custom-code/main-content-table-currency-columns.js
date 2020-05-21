import React from 'react';


class CurrencyColumns extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const myColumns = this.props.currency.map( name => <th scope='col'>{name}</th> )
        return(
            <tr>
                <th scope="col">#</th>
                {myColumns}
            </tr>
        )
        
    }
}

export default CurrencyColumns;