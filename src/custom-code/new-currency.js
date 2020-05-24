import React from 'react';

class NewCurrency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyRecentAdded: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            currencyRecentAdded: true
        })
    }
    
    render(){
        return(
            <div className='container'>
                <div className="row">
                    <div className='col-11'>
                        <h1 className='mt-5'>New currency</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label className='d-block'>Currency required</label>
                            <input type='text' className='form-control w-50 d-block mb-3' placeholder='Currency' required/>
                            <br />
                            <label className='d-block'> Your Email (opcional)</label>
                            <input type='email' className='form-control w-50 d-block mb-3' placeholder='E-mail' />
                            <br />
                            <button type='submit' className='btn btn-dark mb-3'>Submit</button>
                            <div className={this.state.currencyRecentAdded? '' : 'd-none'}>
                                <p>Your request is been precessed, thanks!</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewCurrency