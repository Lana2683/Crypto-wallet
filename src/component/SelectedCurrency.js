import React, { Component } from 'react'

class SelectedCurrency extends Component {
    render() {
        const { name, label, svg, profitLoss, rand } = this.props.currency;
        return (
                <div className='block-selected'>
                    <span className='inline-block'>
                        <img className='svg-selected' src={svg} alt='img' />
                        <div className='currency-name-selected'>
                            <div className='link'>{ name }</div>
                            <label className='label-link' htmlFor='link'>{ label }
                            </label>
                        </div>
                    </span>
                    <div className='random-inline'>
                        { rand }
                        <label className='label-link-profit-loss' htmlFor='link'>
                            { profitLoss }
                        </label>
                    </div>
                </div>
            )
    }
}

export default SelectedCurrency
