import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }
    render() {
        return (
            <div className='chart'>
               <Line
                data={this.state.chartData}
                height={400}
                options={{ 
                    title:{
                        display:true
                    }
                 }}
                />
            </div>
        )
    }
}

export default Chart; 