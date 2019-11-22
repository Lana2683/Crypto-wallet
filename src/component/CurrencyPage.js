import React, { Component } from 'react';
import Arrow from '../SVG/Arrow';
import CurrencyInline from '../component/CurrencyInline';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  getBtcByHour, 
          getBtcByDay,
          getEthByHour, 
          getEthByDay,
          getXrpByHour, 
          getXrpByDay } from '../actions/currencyAction';
import Chart from './Chart';
import SelectedCurrency from '../component/SelectedCurrency';

import '../css/CurrencyPage.css';

class CurrencyPage extends Component {
    componentDidMount() {
        this.props.getBtcByHour();
        this.props.getBtcByDay();
        this.props.getEthByHour(); 
        this.props.getEthByDay();
        this.props.getXrpByHour(); 
        this.props.getXrpByDay();
        // const { id } = this.props.match.params;
        // this.props.getElement(id);
        // console.log(id)
    };
    
    render() { 
        const { currencies, btcByHours, btcByDay, ethByHours, ethByDay, xrpByHours, xrpByDay } = this.props;
        const selectedCurrency = currencies.filter(currency => (currency.selected)?currency:null)
        const arrCurrencyHour = selectedCurrency.map(currencyHour => {
            if(currencyHour.id === 1){
               return btcByHours.map(btc => {return btc.close})
            }
            if(currencyHour.id === 2){
               return ethByHours.map(eth => {return eth.close})
            }
            if(currencyHour.id === 3){
               return xrpByHours.map(xrp => {return xrp.close})
            }
            return null
        })
        
        const arrCurrencyDay = selectedCurrency.map(currencyDay => {
            if(currencyDay.id === 1){
               return btcByDay.map(btc => {return btc.close})
            }
            if(currencyDay.id === 2){
               return ethByDay.map(eth => {return eth.close})
            }
            if(currencyDay.id === 3){
               return xrpByDay.map(xrp => {return xrp.close})
            }
            return null
        })

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
                <Chart arrCurrencyHour={arrCurrencyHour} arrCurrencyDay={arrCurrencyDay}/>
            </div>
        )
        
        
    }
 
}

const mapStateToProps = (state) => ({
    currencies: state.currency.currencies,
    btcByHours: state.currency.btcByHours,
    btcByDay: state.currency.btcByDay,
    ethByHours: state.currency.ethByHours,
    ethByDay: state.currency.ethByDay,
    xrpByHours: state.currency.xrpByHours,
    xrpByDay: state.currency.xrpByDay
});

export default connect(mapStateToProps, {getBtcByHour, getBtcByDay, getEthByHour, getEthByDay, getXrpByHour, getXrpByDay
 })( CurrencyPage );
