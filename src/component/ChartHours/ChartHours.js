import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line, defaults } from 'react-chartjs-2';
import {  getBtcByHour, 
          getEthByHour, 
          getXrpByHour, } from '../../actions/currencyAction';

defaults.global.defaultFontSize=20;
defaults.global.defaultFontColor='white'

class ChartHours extends Component {

    componentDidMount() {
        const id = this.props.id;
        this.props.getBtcByHour(id);
        this.props.getEthByHour(id); 
        this.props.getXrpByHour(id); 
    };

    render() {
        const {  crnByHours } = this.props;

        return (
        <Line
            data={ {
                labels: ['-12h','-11h','-10h','-9h','-8h','-7h','-6h','-5h','-4h', '-3h', '-2h', '-1h','now'],
                datasets: [
                    {
                        data: crnByHours,
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
    crnByHours: state.currency.crnByHours,
});

export default connect(mapStateToProps, {getBtcByHour, getEthByHour, getXrpByHour
})( ChartHours );