import React from 'react';


class CurrencyColumns extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const myColumns = this.props.currency.map( name => <th scope='col' key={name}>{name}</th> )
        return(
            <tr>
                <th scope="col" className='text-center'>#</th>
                {myColumns}
            </tr>
        )
        
    }
}

export default CurrencyColumns;