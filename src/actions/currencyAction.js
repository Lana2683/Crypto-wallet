import { GET_BTCUSD, GET_ETHUSD, GET_XRPUSD } from '../actions/types';
import axios from 'axios';

export const getBtcUsd = () => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    dispatch({
        type:  GET_BTCUSD,
        payload: res.data.BTC.USD 
    });
    
}

export const getEthUsd = () => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD')
    dispatch({
        type:  GET_ETHUSD,
        payload: res.data.ETH.USD 
    });
    
}

export const getEthXrp = () => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=XRP&tsyms=USD')
    dispatch({
        type:  GET_XRPUSD,
        payload: res.data.XRP.USD 
    });
    
}
