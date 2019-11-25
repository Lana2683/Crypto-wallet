import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line, defaults } from 'react-chartjs-2';
import {  getBtcByHour, 
          getEthByHour, 
          getXrpByHour, } from '../actions/currencyAction';

defaults.global.defaultFontSize=20;
defaults.global.defaultFontColor='white'

class ChartHours extends Component {

    componentDidMount() {
        this.props.getBtcByHour();
        this.props.getEthByHour(); 
        this.props.getXrpByHour(); 
    };

    render() {
        const { id, btcByHours, ethByHours, xrpByHours} = this.props;
        let arrCurrencyHour = [];
            if(id === 1){
                arrCurrencyHour = btcByHours
            }
            if(id === 2){
               arrCurrencyHour = ethByHours
            }
            if(id === 3){
               arrCurrencyHour = xrpByHours
            }
        return (
        <Line
            data={ {
                labels: ['-12h','-11h','-10h','-9h','-8h','-7h','-6h','-5h','-4h', '-3h', '-2h', '-1h','now'],
                datasets: [
                    {
                        data: arrCurrencyHour,
                        backgroundColor:'rgba(159,114,255,0.1)',
                        borderColor: 'rgb(159,114,255)',
                        lineTension: 0
                    }
                ]
            }          
            }
            
            options={{
                legend:{
                   display: false,  
               }
             }}
                height={400}
        />
        )
    }
}

const mapStateToProps = (state) => ({
    btcByHours: state.currency.btcByHours,
    ethByHours: state.currency.ethByHours,
    xrpByHours: state.currency.xrpByHours
});

export default connect(mapStateToProps, {getBtcByHour, getEthByHour, getXrpByHour
})( ChartHours );