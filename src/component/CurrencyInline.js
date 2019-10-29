import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CurrencyInline extends Component {
    render() {
        const { name, label, svg, profitLoss, rand } = this.props.currency;
        return (
                <div className='block-inline'>
                    <span className='inline-block'>
                        <img className='svg-inline' src={svg} alt='img' />
                        <div className='currency-name-inline'>
                            <Link to='/page' className='link'>{ name }</Link>
                            <label className='label-link' htmlFor='link'>{ label }
                            </label>
                        </div>
                    </span>
                    <div className='random-inline'>
                        { rand }
                        <label className='label-link' htmlFor='link'>
                            { profitLoss }
                        </label>
                    </div>
                </div>
            )
    }
}

export default  connect(null, {})(CurrencyInline);

