import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Currency extends Component {
    render() {
        const { name, USD, label, svg, profitLoss, rand } = this.props.currency;
        const sum = ((rand * USD).toFixed(2)*1); 
        return (
            <div className='card'>
            <div className='block'>
                <span className='inline-block'>
                    <img className='svg' src={svg}/>
                    <div className='currency-name'>
                        <Link to='/page' className='link'>{ name }</Link>
                         <label className='label-link' htmlFor='link'>{ label }
                        </label>
                    </div>
                </span>
                <div className='random'>
                    { rand }
                    <label className='label-link' htmlFor='link'>
                        ${ sum }
                    </label>
                </div>
            </div>
                
            <hr/>
            <div className='block'>
                <div className='currency-price'>$
                    { USD }
                    <label className='label-link' htmlFor='currency-price'>Price
                    </label>
                </div>
                <div>
                    <div className='profit-loss'>
                        {profitLoss}
                        <label className='label-link' htmlFor='profit-loss'>Profit/Loss
                        </label>
                    </div>
                </div>
            </div>
            </div>
            )
    }
}

export default  connect(null, {})(Currency);
