import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getElement } from '../actions/currencyAction';

import '../css/Currency.css';

class Currency extends Component {
    
    onClickSelect= id => {
        this.props.getElement(id);
    };

    render() {
        const { id, name, USD, label, svg, profitLoss, rand, sum } = this.props.currency;
        
        return (
            <div className='card'>
            <div className='block'>
            <Link to={`/page/${id}`} className='link' onClick={()=> this.onClickSelect(id)} >
                <span className='inline-block'>
                    <img className='svg' src={ svg } alt='img'/>
                    <div className='currency-name'>
                        { name }
                         <span className='label-link'>{ label }
                        </span>
                    </div>
                </span>
            </Link>
                <div className='random'>
                    { rand }
                    <span className='label-link'>
                        ${ sum }
                    </span>
                </div>
            </div>    
            <hr/>
            <div className='block'>
                <div className='currency-price'>$
                    { USD }
                    <span className='label-link'>Price
                    </span>
                </div>
                <div>
                    <div className='profit-loss'>
                        {profitLoss}
                        <span className='label-link'>Profit/Loss
                        </span>
                    </div>
                </div>
            </div>
            </div>
            )
    }
}

const mapStateToProps = state => ({
    currencies: state.currency.currencies
});

export default  connect(mapStateToProps, { getElement })(Currency);
