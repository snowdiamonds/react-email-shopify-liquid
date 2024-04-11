import React from 'react';
import { Hr, Link, Preview, Section, Text } from '@react-email/components';
import { EmailContainer, Greeting, LiquidIf, OrderLineItems, OrderTransactions, PaymentTerms, ShippingAddress, Subtotals } from 'react-email-shopify-liquid';

const OrderInvoice = () => (
    <EmailContainer>
        <Preview>Order Invoice</Preview>
        <Section>
            <Greeting />
            <Text>
                Invoice for order ({'{{ order.name }}'}).
            </Text>
            <LiquidIf expression="custom_message">
                <Text>
                    {'{{ custom_message }}'}
                </Text>
            </LiquidIf>
        </Section>
        <Section className="mt-6">
            <Link href="{{ checkout_payment_collection_url }}" className="bg-black px-4 py-2 text-white text-sm">PAY NOW</Link>
        </Section>
        <Hr className="border-black my-10"></Hr>
        <OrderLineItems />
        <Subtotals />
        <Hr className="border-black my-10"></Hr>
        <PaymentTerms />
        <OrderTransactions />
        <ShippingAddress />
    </EmailContainer>
);

export default OrderInvoice;
