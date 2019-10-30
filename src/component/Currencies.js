import React, { Component } from 'react';
import Currency from './Currency';
import Amound from './Amount';
import { connect } from 'react-redux';
import { getBtcUsd } from '../actions/currencyAction';
import { getEthUsd } from '../actions/currencyAction';
import { getEthXrp } from '../actions/currencyAction';
import Search from '../SVG/Search';
import Bell from '../SVG/Bell';

class Currencies extends Component {
    componentDidMount() {
        this.props.getBtcUsd();
        this.props.getEthUsd();
        this.props.getEthXrp();
    };
    render() {
        const { currencies } = this.props
        return ( 
            <React.Fragment>
                <div className='icons'>
                    <Search />
                    <Bell />
                </div>
                <Amound />
                {currencies.map(currency => (
                    <Currency
                    key={currency.id}
                    currency={currency}
                    />
                ))}
            </React.Fragment>
                
        )
    }
}

const mapStateToProps = state => ({
    currencies: state.currency.currencies
});

export default connect(mapStateToProps, { getEthUsd, getBtcUsd, getEthXrp })(Currencies);
