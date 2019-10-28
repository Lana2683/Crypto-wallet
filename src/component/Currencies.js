import React, { Component } from 'react';
import Currency from './Currency';
import Amound from './Amount';
import { Consumer } from '../context';

 class Currencies extends Component {
    render() {
        return ( 
        
            <Consumer>
                {value => {
                    const { currencies } = value;
                    return(
                    <React.Fragment>
                        <i className="fas fa-search"></i>
        <i className="far fa-bell"></i>
        <Amound />
                        {currencies.map(currency => (
                            <Currency
                            key={currency.id}
                            currency={currency}
                            />
                        ))}
                    </React.Fragment>
                    )
                }}
            </Consumer>
        )
        
    }
}

export default Currencies;
