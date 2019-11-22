import React, { Component } from 'react';

import '../css/SelectedCurrency.css';

class SelectedCurrency extends Component {
    render() {
        const { name, label, svg, profitLoss, rand } = this.props.currency;
        return (
                <div className='block-selected'>
                    <span className='inline-block'>
                        <img className='svg-selected' src={svg} alt='img' />
                        <div className='currency-name-selected'>
                            <div className='link'>{ name }</div>
                            <span className='label-link'>{ label }
                            </span>
                        </div>
                    </span>
                    <div className='random-inline'>
                        { rand }
                        <span className='label-link-profit-loss'>
                            { profitLoss }
                        </span>
                    </div>
                </div>
            )
    }
}

export default SelectedCurrency
