import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Consumer } from '../context';
class Currency extends Component {
    render() {
        const { USD, title } = this.props.currency;

        return (
            <Consumer>
                {value => {
                    return (
                    <div className='card'>
                    <div className='block'><Link to='/page' >{title}</Link></div>
                    <hr/>
                    <div className='block'>{USD}</div>
                    </div>
                    )
                    
                }}
            </Consumer>

           
        )
    }
}

export default Currency;
