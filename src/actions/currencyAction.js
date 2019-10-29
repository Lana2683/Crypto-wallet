import { GET_ETHUSD } from '../actions/types';
import axios from 'axios';

export const getEthUsd = () => async dispatch => {
    const res = await axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD')
    dispatch({
        type:  GET_ETHUSD,
        payload: res.data.ETH.USD 
    });
    
}