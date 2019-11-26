import { GET_BTCUSD, 
         GET_ETHUSD, 
         GET_XRPUSD, 
         GET_ELEMENT,
         GET_BTCBYHOUR, 
         GET_BTCBYDAY,
         GET_ETHBYHOUR, 
         GET_ETHBYDAY,
         GET_XRPBYHOUR, 
         GET_XRPBYDAY,
        } from '../actions/types';
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

export const getXrpUsd = () => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=XRP&tsyms=USD')
    dispatch({
        type:  GET_XRPUSD,
        payload: res.data.XRP.USD 
    });
    
}

export const getElement = (id) => {
    return {
        type:  GET_ELEMENT,
        payload: id
    } 
}

export const getBtcByHour = (id) => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=12')
    if ( id === 1 ){
    dispatch({
        type:  GET_BTCBYHOUR,
        payload: res.data.Data.Data
    })
    }   
}

export const getBtcByDay = (id) => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=6')
    if ( id === 1 ){
    dispatch({
        type:  GET_BTCBYDAY,
        payload: res.data.Data.Data
    })
    }   
}

export const getEthByHour = (id) => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/v2/histohour?fsym=ETH&tsym=USD&limit=12')
    if ( id === 2 ){
    dispatch({
        type:  GET_ETHBYHOUR,
        payload: res.data.Data.Data
    }) 
    } 
}

export const getEthByDay = (id) => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=6')
    if ( id === 2 ){
    dispatch({
        type:  GET_ETHBYDAY,
        payload: res.data.Data.Data
    })
    }  
}

export const getXrpByHour = (id) => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/v2/histohour?fsym=XRP&tsym=USD&limit=12')
    if ( id === 3 ){
    dispatch({
        type:  GET_XRPBYHOUR,
        payload: res.data.Data.Data
    })  
    } 
}

export const getXrpByDay = (id) => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=XRP&tsym=USD&limit=6')
    if ( id === 3 ){
    dispatch({
        type:  GET_XRPBYDAY,
        payload: res.data.Data.Data
    })
    }   
}

