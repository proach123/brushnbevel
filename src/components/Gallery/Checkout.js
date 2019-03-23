import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import Navbar from '../NavBar/Navbar'
import '../../style/checkout.scss'


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            amount: 0
         }
    }

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment', {token, amount: this.state.amount}).then(res => {
            console.log(res)
        })
    }

    render() { 
        return ( 
            <div className='CheckoutDiv'>
            <Navbar/>
            <div className='stripe'>
           <StripeCheckout
                name="Brush & Bevel inc."
                description=""
                image="http://via.placeholder.com/100x100"
                token= {this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                amount={this.state.amount}
            />
            </div>
            </div>
         );
    }
}
 
export default Checkout;