import { GET_ETHUSD } from '../actions/types';
import bitcoin from '../SVG/bitcoin.svg';
import ethereum from '../SVG/ethereum.svg';
import ripple from '../SVG/ripple.svg';

const initialState = {
    currencies: [
        {
            id: 1,
            USD: 123,
            name: 'BTN',
            label: 'Bitcoin',
            svg: bitcoin,
            profitLoss: '+2.75',
            rand: Math.random().toFixed(8),
            // sum: ''
        },
        {
            id: 2,
            USD: 123,
            name: 'ETH',
            label: 'Ethereum',
            svg: ethereum,
            profitLoss:'-2.92',
            rand: Math.random().toFixed(8),
            // sum: ''
        },
        {
            id: 3, 
            USD: 123,
            name: 'XRP',
            label: 'Ripple',
            svg: ripple,
            profitLoss: '+45.23',
            rand: Math.random().toFixed(8),
            // sum: ''
        }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ETHUSD:
            return {
                ...state,
                currencies: state.currencies.map(
                    currency =>
                    currency.id === 2
                        ? (currency.USD = action.payload)
                        : currency
                  )
            }
        default:
            return state;
    }
}


