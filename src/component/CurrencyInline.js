import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrencyInline extends Component {
    render() {
        const { name, label, svg, profitLoss, rand, selected } = this.props.currency;
        return (
                <div  className={selected ? 'block-inline-selected' : 'block-inline'}> 
                    <span className='inline-block'>
                        <img className='svg-inline' src={svg} alt='img' />
                        <div className='currency-name-inline'>
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

export default  connect(null, {})(CurrencyInline);
