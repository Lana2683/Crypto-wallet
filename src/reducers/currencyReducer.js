import { GET_BTCUSD, 
         GET_ETHUSD, 
         GET_XRPUSD,
         GET_ELEMENT, 
         GET_BTCBYHOUR, 
         GET_BTCBYDAY,
         GET_ETHBYHOUR, 
         GET_ETHBYDAY,
         GET_XRPBYHOUR, 
         GET_XRPBYDAY 
        } from '../actions/types';
import bitcoin from '../SVG/bitcoin.svg';
import ethereum from '../SVG/ethereum.svg';
import ripple from '../SVG/ripple.svg';

const initialState = {
    btcByHours: [],
    btcByDay: [],
    ethByHours: [],
    ethByDay: [],
    xrpByHours: [],
    xrpByDay: [],
    currencies: [
        {
            id: 1,
            USD: '',
            name: 'BTC',
            label: 'Bitcoin',
            svg: bitcoin,
            profitLoss: '+2.75%',
            rand: Math.random().toFixed(8),
            selected: false
        },
        {
            id: 2,
            USD: '',
            name: 'ETH',
            label: 'Ethereum',
            svg: ethereum,
            profitLoss:'+2.92%',
            rand: Math.random().toFixed(8),
            selected: false
        },
        {
            id: 3, 
            USD: '',
            name: 'XRP',
            label: 'Ripple',
            svg: ripple,
            profitLoss: '+45.23%',
            rand: Math.random().toFixed(8),
            selected: false
        }
    ],
    
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
                        currency.selected = false;
                        currency.sum = (action.payload*currency.rand).toFixed(2)
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
                        currency.selected = false;
                        currency.sum = (action.payload*currency.rand).toFixed(2)
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
                    currency.selected = false;
                    currency.sum = (action.payload*currency.rand).toFixed(2)
                    }
                    return currency
                })
        }
        case GET_ELEMENT:
        return {
            ...state,
            currencies: state.currencies.map(
                currency => {
                    if(currency.id === action.payload){
                    currency.selected = true;
                    }
                    return currency
                })
        }
        case GET_BTCBYHOUR:
        return {
            ...state,
            btcByHours: action.payload.map(btc => {return btc.close})
        }
        case GET_BTCBYDAY:
        return {
            ...state,
            btcByDay: action.payload.map(btc => {return btc.close})
        }
        case GET_ETHBYHOUR:
        return {
            ...state,
            ethByHours: action.payload.map(eth => {return eth.close})
        }
        case GET_ETHBYDAY:
        return {
            ...state,
            ethByDay: action.payload.map(eth => {return eth.close})
        }
        case GET_XRPBYHOUR:
        return {
            ...state,
            xrpByHours: action.payload.map(xrp => {return xrp.close})
        }
        case GET_XRPBYDAY:
        return {
            ...state,
            xrpByDay: action.payload.map(xrp => {return xrp.close})
        }
        default:
            return state;
    }
}


