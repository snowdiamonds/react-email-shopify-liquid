import React from 'react';
import { Hr, Preview, Section, Text } from '@react-email/components';
import { EmailContainer, Greeting, OrderLineItems, OrderStatusLink, OrderTransactions, ShippingAddress, Subtotals } from 'react-email-shopify-liquid';

export const PaymentSuccess = () => (
    <EmailContainer>
        <Preview>Payment Success</Preview>
        <Section>
            <Greeting />
            <Text>
                Your payment for {'{{ order.name }}'} has been received.
            </Text>
        </Section>
        <Section className="mt-6">
            <OrderStatusLink />
        </Section>
        <Hr className="border-black my-10"></Hr>
        <OrderLineItems />
        <Subtotals />
        <Hr className="border-black mt-10 mb-6"></Hr>
        <OrderTransactions />
        <ShippingAddress />
    </EmailContainer>
);

export default PaymentSuccess;
