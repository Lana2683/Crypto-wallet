import React, { Component } from 'react';
// import PropTypes from 'prop-types';

 class Amount extends Component {
    render() {
        return (
            <div>
                <label htmlFor='total-balance'>
                   Your total balance
                </label> 
                <div className='toal-balance'>{Math.random()}</div>
                <label htmlFor='changes'>
                   24h Changes
                </label> 
                <div className='changes'>+ $37.55</div>
            </div>
        )
    }
}

// Amount.propTypes = {

// }

export default Amount;
