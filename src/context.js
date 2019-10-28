import React, { Component } from 'react';

const Context = React.createContext();

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'GET_CURRENCY':
//             return {

//             }
//     }
// }

export class Provider extends Component {
    state = {
        currencies: [
            {
                id: 1,
                USD: '',
                title: 'BTN'
            },
            {
                id: 2,
                USD: '',
                title: 'ETH'
            },
            {
                id: 3, 
                USD: '',
                title: 'XRP'
            }
        ],
        // dispatch: action => this.setState(state => reducer(state,action))
    }

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

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

