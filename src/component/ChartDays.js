import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line, defaults } from 'react-chartjs-2';
import { getBtcByDay,
         getEthByDay,
         getXrpByDay } from '../actions/currencyAction';

defaults.global.defaultFontSize=20;
defaults.global.defaultFontColor='white'

class ChartDays extends Component {

    componentDidMount() {
        this.props.getBtcByDay();
        this.props.getEthByDay();
        this.props.getXrpByDay();
    };

    render() {
        const { id, btcByDay, ethByDay, xrpByDay } = this.props;
        let arrCurrencyDay = [] ;

        if(id === 1){ 
            arrCurrencyDay = btcByDay
            }
        if(id === 2){
            arrCurrencyDay = ethByDay
            }
        if(id === 3){
             arrCurrencyDay = xrpByDay
            } 
            
        return (
        <Line
            data={ {
                labels: ['-6d', '-5d', '-4d', '-3d','-2d','-1d','today'],
                datasets: [
                    {
                        data: arrCurrencyDay,
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
    btcByDay: state.currency.btcByDay,
    ethByDay: state.currency.ethByDay,
    xrpByDay: state.currency.xrpByDay
});

export default connect(mapStateToProps, { getBtcByDay, getEthByDay, getXrpByDay
})( ChartDays );
