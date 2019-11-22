import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/CurrencyInline.css';

class CurrencyInline extends Component {
    render() {
        const { name, label, svg, profitLoss, rand, selected } = this.props.currency;
        return (
                <div  className={selected ? 'block-inline-selected' : 'block-inline'}> 
                    <span className='inline-block'>
                        <img className='svg-inline' src={svg} alt='img' />
                        <div className='currency-name-inline'>
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

export default  connect(null, {})(CurrencyInline);
