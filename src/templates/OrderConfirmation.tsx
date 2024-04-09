import React from 'react';
import { Hr, Link, Preview, Section, Text } from '@react-email/components';
import { Greeting } from '../components/Greeting';
import { OrderLineItems } from '../components/OrderLineItems';
import { OrderTransactions } from '../components/OrderTransactions';
import { PaymentTerms } from '../components/PaymentTerms';
import { ShippingAddress } from '../components/ShippingAddress';
import { Subtotals } from '../components/Subtotals';
import { EmailContainer } from '../components/EmailContainer';

export const OrderConfirmation = () => (
    <EmailContainer>
        <Preview>Order Confirmation</Preview>
        <Section>
            <Greeting />
            <Text>
                Thank you for placing your order ({'{{ order.name }}'}). As soon as your order ships, you will receive a separate shipping confirmation email with tracking information.
            </Text>
        </Section>
        <Section className="mt-6">
            <Link href="{{ order.order_status_url }}" className="bg-black px-4 py-2 text-white text-sm">VIEW ORDER STATUS</Link>
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

export default OrderConfirmation;
