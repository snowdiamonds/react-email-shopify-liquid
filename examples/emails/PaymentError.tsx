import React from 'react';
import { Hr, Link, Preview, Section, Text } from '@react-email/components';
import { EmailContainer, Greeting, OrderLineItems, OrderTransactions, ShippingAddress, Subtotals } from 'react-email-shopify-liquid';

export const PaymentError = () => (
    <EmailContainer>
        <Preview>{'{{ email_title }}'}</Preview>
        <Section>
            <Greeting />
            <Text>
                You added items to your shopping cart, but the payment couldn’t be processed. You haven’t been charged.
            </Text>
            <Text>
                You can still return to your cart to complete your purchase.
            </Text>
        </Section>
        <Section className="mt-6">
            <Link href="{{ url }}" className="bg-black px-4 py-2 text-white text-sm">RETURN TO CART</Link>
        </Section>
        <Hr className="border-black my-10"></Hr>
        <OrderLineItems />
        <Subtotals />
        <Hr className="border-black mt-10 mb-6"></Hr>
        <OrderTransactions />
        <ShippingAddress />
    </EmailContainer>
);

export default PaymentError;
