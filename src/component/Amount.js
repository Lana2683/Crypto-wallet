import React, { Component } from 'react';

 class Amount extends Component {
    render() {
        const {amount} = this.props;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return (
            <div>
                <label className='label-total-balance' htmlFor='total-balance'>
                   Your total balance
                </label> 
                <div className='toal-balance'>
                    <span className='toal-balance-sign'>$</span>
                    {amount.reduce(reducer)}
                </div>
                <label className='label-total-balance' htmlFor='changes'>
                   24h Changes
                </label> 
                <div className='changes'>+ $37.55</div>
            </div>
        )
    }
}

export default  Amount;

