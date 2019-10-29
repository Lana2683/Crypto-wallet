import React, { Component } from 'react';

 class Amount extends Component {
    render() {
        return (
            <div>
                <label className='label-total-balance' htmlFor='total-balance'>
                   Your total balance
                </label> 
                <div className='toal-balance'>
                    <span className='toal-balance-sign'>$</span>
                    {Math.random()}
                </div>
                <label className='label-total-balance' htmlFor='changes'>
                   24h Changes
                </label> 
                <div className='changes'>+ $37.55</div>
            </div>
        )
    }
}

export default Amount;
