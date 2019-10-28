import React, { Component } from 'react'

class Test extends Component {
    state = {
        USD: ''
    };

    componentDidMount(){
        fetch
        ('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD')
        .then(response => response.json())
        .then(data => 
            // console.log(data)
            this.setState({
            USD: data.ETH.USD
        })
        )
    }

    // componentWillMount(){
    //     console.log('componentWillMount...')
    // }
    // componentDidUpdate(){
    //     console.log('componentDidUpdate...')
    // }
    render() {
        const { USD } = this.state;
        return (
            <div>
                <h1>{ USD }</h1>
            </div>
        )
    }
}

export default Test;
