import React, { Component } from 'react';
import Arrow from '../SVG/Arrow';
import CurrencyInline from '../component/CurrencyInline';
import { connect } from 'react-redux';
import Chart from './Chart';

class CurrencyPage extends Component {
    constructor(){
        super();
        this.state = {
            chartData:{}
        }
    }
    componentWillMount() {
    this.getChartData();
    };

    getChartData(){
        this.setState ({
            chartData:{
                labels: ['05h00','06h00','07h00','08h00','09h00','10h00'],
                datasets:[
                    {
                        label: 'Bitcoin',
                        data:[2,3,4,5,4,3,6],
                        backgroundColor:['rgba(159,114,255,0.3)']
                    }
                ]
            }
        })
    }

    onclick () {
        window.history.back();
    }

    render() { 
        const { currencies } = this.props
        
        return (
            <div>
                <div className='icons' onClick={(e) => this.onclick(e)}>
                    <Arrow />
                </div>
                <div className='currency-group-inline'>
                    {currencies.map(currency => (
                        <CurrencyInline
                        key={currency.id}
                        currency={currency}
                        />
                    ))}
                </div>
                <Chart chartData={this.state.chartData} legendPosition='bottom'/>
            </div>
        )
        
        
    }
}


const mapStateToProps = (state) => ({
    currencies: state.currency.currencies
});

export default connect(mapStateToProps, { })(CurrencyPage);

