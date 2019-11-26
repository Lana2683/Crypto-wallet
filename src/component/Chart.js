import React, { Component } from 'react';
import ChartDays from './ChartDays';
import ChartHours from './ChartHours';

import '../css/Chart.css';

class Chart extends Component {
    state = {
        showCurrencyByHour: true,
        showCurrencyByDay: false
      };

    render() {
        const { currency } = this.props
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
            {showCurrencyByHour ? (<ChartHours id={currency.id}/>) : null}
            {showCurrencyByDay ? (<ChartDays id={currency.id}/>) : null}
            </div>
        )
    }
}

export default Chart ;
