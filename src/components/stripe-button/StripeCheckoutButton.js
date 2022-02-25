import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JgHGXFCBTk65wqeDpFgFP2NcHL1LJEeA0pgceo1zWhmmQSEZKvumUNCwEqpKdGVmYz4X6Caoel4Fxnii7vVBywq00kShaK1qk';
    const onToken = (token) => {
        console.log(token)
        alert('Payment Succesful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            billingAddress
            shippingAddress
            name='CROWN Clothing Ltd.'
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total Price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton