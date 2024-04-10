import React from 'react';
import { Hr, Preview, Section, Text } from '@react-email/components';
import { EmailContainer, Greeting, OrderLineItems, OrderTransactions, OrderStatusLink, ShippingAddress, Subtotals } from 'react-email-shopify-liquid';

const OrderPaymentReceipt = () => (
    <EmailContainer>
        <Preview>Order Payment Receipt</Preview>
        <Section>
            <Greeting />
            <Text>
                Your payment has been processed for ({'{{ order.name }}'}).
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

export default OrderPaymentReceipt;
