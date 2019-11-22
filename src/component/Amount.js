import React, { Component } from 'react';

import '../css/Amount.css';

 class Amount extends Component {
    render() {
        const {amount} = this.props;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const changes = '+ $37.55 ↑' 
        return (
            <div>
                <span className='label-total-balance'>
                   Your total balance
                </span> 
                <div className='toal-balance'>
                    <span className='toal-balance-sign'>$</span>
                    { amount.reduce(reducer).toFixed(2) }
                </div>
                <span className='label-total-balance'>
                   24h Changes
                </span> 
                <div className='changes'>{ changes }</div>
            </div>
        )
    }
}

export default  Amount;

