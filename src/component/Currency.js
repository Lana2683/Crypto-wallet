import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Currency extends Component {
    render() {
        const { id, name, USD, label, svg, profitLoss, rand, sum  } = this.props.currency;
        return (
            <div className='card'>
            <div className='block'>
                <span className='inline-block'>
                    <img className='svg' src={svg} alt='img'/>
                    <div className='currency-name'>
                        <Link to={`/page/${id}`}  index={id} className='link'>{ name }</Link>
                         <label className='label-link' htmlFor='link'>{ label }
                        </label>
                    </div>
                </span>
                <div className='random'>
                    { rand }
                    <label className='label-link' htmlFor='link'>
                        ${ sum }
                    </label>
                </div>
            </div>
                
            <hr/>
            <div className='block'>
                <div className='currency-price'>$
                    { USD }
                    <label className='label-link' htmlFor='currency-price'>Price
                    </label>
                </div>
                <div>
                    <div className='profit-loss'>
                        {profitLoss}
                        <label className='label-link' htmlFor='profit-loss'>Profit/Loss
                        </label>
                    </div>
                </div>
            </div>
            </div>
            )
    }
}


const mapStateToProps = state => ({
    currencies: state.currency.currencies
});


export default  connect(mapStateToProps, {})(Currency);
