import React from 'react';
import { Hr, Preview, Section, Text } from '@react-email/components';
import { EmailContainer, Greeting, OrderLineItems, OrderTransactions, OrderCancellationReason, ShippingAddress, Subtotals } from 'react-email-shopify-liquid';

export const OrderCanceled = () => (
    <EmailContainer>
        <Preview>Order Canceled</Preview>
        <Section>
            <Greeting />
            <Text>
                Order ({'{{ order.name }}'}) has been canceled.
            </Text>
            <OrderCancellationReason />
        </Section>
        <Hr className="border-black my-10"></Hr>
        <OrderLineItems />
        <Subtotals />
        <Hr className="border-black mt-10 mb-6"></Hr>
        <OrderTransactions />
        <ShippingAddress />
    </EmailContainer>
);

export default OrderCanceled;
