import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JQ7PmG9yf5HcM0g3E68vnY1z7TzCxow5PAIayShMcLLb3xqt02oUnZbBDqE5mxcdrDKYl99zmFtEKh7LCkZsdQE00ROzIfxKo';

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = ' C E-Commerce Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;