import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.global.defaultFontSize=20;
defaults.global.defaultFontColor='white'

class Chart extends Component {
    state = {
        showCurrencyByHour: true,
        showCurrencyByDay: false
      };
    render() {
        const { arrCurrencyHour, arrCurrencyDay }=this.props;
        const { showCurrencyByHour, showCurrencyByDay } = this.state;
        return (
            <div className='chart'>
                <div className='show-charts'>
                    <div className={showCurrencyByHour ? 'shown-chart' : 'show-chart'} onClick={() =>
                        this.setState({
                            showCurrencyByHour: !this.state.showCurrencyByHour,
                            showCurrencyByDay: false
                        })}>Day</div>
                    <div className={showCurrencyByDay ? 'shown-chart' : 'show-chart'} onClick={() =>
                        this.setState({
                            showCurrencyByDay: !this.state.showCurrencyByDay,
                            showCurrencyByHour: false
                        })}>
                        Week
                    </div>
                </div>
            {showCurrencyByHour ? (<Line
            data={ {
                labels: ['-4h', '-3h', '-2h', '-1h','now'],
                datasets: [
                    {
                        data: arrCurrencyHour[0],
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
                />) : null}
                 {showCurrencyByDay ? (<Line
            data={ {
                labels: ['-6d', '-5d', '-4d', '-3d','-2d','-1d','today'],
                datasets: [
                    {
                        data: arrCurrencyDay[0],
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
                ) : null}
            </div>
        )
    }
}

export default Chart; 
