import { GET_BTCUSD } from '../actions/types';
import { GET_ETHUSD } from '../actions/types';
import { GET_XRPUSD } from '../actions/types';
import bitcoin from '../SVG/bitcoin.svg';
import ethereum from '../SVG/ethereum.svg';
import ripple from '../SVG/ripple.svg';

const initialState = {
    currencies: [
        {
            id: 1,
            USD: '',
            name: 'BTN',
            label: 'Bitcoin',
            svg: bitcoin,
            profitLoss: '+2.75',
            rand: Math.random().toFixed(8),
            // sum: ''
            selected: true
        },
        {
            id: 2,
            USD: '',
            name: 'ETH',
            label: 'Ethereum',
            svg: ethereum,
            profitLoss:'-2.92',
            rand: Math.random().toFixed(8),
            // sum: ''
            selected: false
        },
        {
            id: 3, 
            USD: '',
            name: 'XRP',
            label: 'Ripple',
            svg: ripple,
            profitLoss: '+45.23',
            rand: Math.random().toFixed(8),
            // sum: ''
            selected: false
        }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BTCUSD:
            return {
                ...state,
                currencies: state.currencies.map(
                    currency => {
                            if(currency.id === 1){
                            currency.USD = action.payload;
                            }
                            return currency
                    })
            }  
        case GET_ETHUSD:
            return {
                ...state,
                currencies: state.currencies.map(
                    currency => {
                            if(currency.id === 2){
                            currency.USD = action.payload;
                            }
                            return currency
                    })
        }
        case GET_XRPUSD:
        return {
            ...state,
            currencies: state.currencies.map(
                currency => {
                        if(currency.id === 3){
                        currency.USD = action.payload;
                        }
                        return currency
                })
        }
        
        default:
            return state;
    }
}


