import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line, defaults } from 'react-chartjs-2';
import { getBtcByDay,
         getEthByDay,
         getXrpByDay } from '../../actions/currencyAction';

defaults.global.defaultFontSize=20;
defaults.global.defaultFontColor='white'

class ChartDays extends Component {

    componentDidMount() {
        const id = this.props.id;
        this.props.getBtcByDay(id);
        this.props.getEthByDay(id);
        this.props.getXrpByDay(id);
    };

    render() {
        const { crnByDay } = this.props;
    
        return (
        <Line
            data={ {
                labels: ['-6d', '-5d', '-4d', '-3d','-2d','-1d','today'],
                datasets: [
                    {
                        data: crnByDay,
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
    crnByDay: state.currency.crnByDay,
});

export default connect(mapStateToProps, { getBtcByDay, getEthByDay, getXrpByDay
})( ChartDays );
