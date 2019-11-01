import React, { Component } from 'react';

 class Amount extends Component {
    render() {
        const {amount} = this.props;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const changes = '+ $37.55 ↑' 
        return (
            <div>
                <label className='label-total-balance' htmlFor='total-balance'>
                   Your total balance
                </label> 
                <div className='toal-balance'>
                    <span className='toal-balance-sign'>$</span>
                    { amount.reduce(reducer).toFixed(2) }
                </div>
                <label className='label-total-balance' htmlFor='changes'>
                   24h Changes
                </label> 
                <div className='changes'>{ changes }</div>
            </div>
        )
    }
}

export default  Amount;

