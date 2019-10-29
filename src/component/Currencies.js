import React, { Component } from 'react';
import Currency from './Currency';
import Amound from './Amount';
import { connect } from 'react-redux';
import { getEthUsd } from '../actions/currencyAction';
import Search from '../SVG/Search';
import Bell from '../SVG/Bell';


 class Currencies extends Component {
    componentWillMount() {
        this.props.getEthUsd();
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
                    updateData={this.updateData}
                    />
                ))}
            </React.Fragment>
                 
        )
        
    }
}

const mapStateToProps = (state) => ({
    currencies: state.currency.currencies
});

export default connect(mapStateToProps, { getEthUsd })(Currencies);
