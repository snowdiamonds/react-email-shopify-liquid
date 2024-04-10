import React from 'react';
import { Hr, Link, Preview, Section, Text } from '@react-email/components';
import { EmailContainer, Greeting, OrderLineItems, OrderStatusLink, OrderTransactions, PaymentTerms, ShippingAddress, Subtotals } from 'react-email-shopify-liquid';


const OrderUpdated = () => (
    <EmailContainer>
        <Preview>Order Updated</Preview>
        <Section>
            <Greeting />
            <Text>
                Your order ({'{{ order.name }}'}) was updated.
            </Text>
        </Section>
        <Section className="mt-6">
            <OrderStatusLink />
        </Section>
        <Hr className="border-black my-10"></Hr>
        <OrderLineItems />
        <Subtotals />
        <Hr className="border-black mt-10 mb-6"></Hr>
        <PaymentTerms />
        <OrderTransactions />
        <ShippingAddress />
    </EmailContainer>
);

export default OrderUpdated;
