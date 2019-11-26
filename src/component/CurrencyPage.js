import React, { Component } from 'react';
import Arrow from '../SVG/Arrow';
import CurrencyInline from '../component/CurrencyInline';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getElement } from '../actions/currencyAction';
import Chart from './Chart';
import SelectedCurrency from '../component/SelectedCurrency';

import '../css/CurrencyPage.css';

class CurrencyPage extends Component {

    componentDidMount()  {
        const id = this.props.match.params.id
        this.props.getElement(id);
    };

    render() { 
        const { currencies } = this.props;
        const selectedCurrency = currencies.filter(currency => (currency.selected)?currency:null)
        
        return (
            <div>
                <Link to={'/'} className='icons'>
                    <Arrow />
                </Link>
                <div className='currency-group-inline'>
                    {currencies.map(currency => (
                        <CurrencyInline
                        key={currency.id}
                        currency={currency}
                        />
                    ))}
                </div>
                <div className='currency-group'>
                {selectedCurrency.map(currency => (
                        <SelectedCurrency
                        key={currency.id}
                        currency={currency}
                        />
                    ))}
                </div>
                {selectedCurrency.map(currency => (
                        <Chart
                        key={currency.id}
                        currency={currency}
                        />
                    ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currencies: state.currency.currencies
});

export default connect(mapStateToProps, { getElement })( CurrencyPage );

