import React, { Component } from 'react';
import Arrow from '../../SVG/Arrow';
import CurrencyInline from '../CurrencyInline/CurrencyInline';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getElement } from '../../actions/currencyAction';
import Chart from '../Chart/Chart';
import SelectedCurrency from '../SelectedCurrency/SelectedCurrency';

import './CurrencyPage.css';

class CurrencyPage extends Component {

    componentDidMount()  {
        const id = this.props.match.params.id
        this.props.getElement(id);
    };

    render() { 
        const { currencies } = this.props;
        
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
                {currencies.map(currency => 
                     {
                        if(currency.selected === true){
                            return <SelectedCurrency
                            key={currency.id}
                            currency={currency}
                            />
                        }
                        return null
                    })
                }
                </div>
                {currencies.map(currency => 
                     {
                        if(currency.selected === true){
                            return <Chart
                            key={currency.id}
                            currency={currency}
                            />
                        }
                        return null
                    })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currencies: state.currency.currencies
});

export default connect(mapStateToProps, { getElement })( CurrencyPage );

