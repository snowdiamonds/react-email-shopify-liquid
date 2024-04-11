import React from 'react';
import { Hr, Preview, Link, Section, Text } from '@react-email/components';
import { EmailContainer, Greeting, LiquidIf, OrderLineItems, OrderTransactions, PaymentTerms, ShippingAddress, Subtotals } from 'react-email-shopify-liquid';

export const DraftOrderInvoice = () => (
    <EmailContainer>
        <Preview>Order Invoice</Preview>
        <Section>
            <Greeting />
            <Text>
                Complete your purchase.
            </Text>
            <LiquidIf expression="custom_message">
                <Text>
                    {'{{ custom_message }}'}
                </Text>
            </LiquidIf>
            <LiquidIf expression="reserve_inventory_until">
                <Text>{'These item(s) will be reserved for you until {{ reserve_inventory_until | date: format: \'default\' }}'}</Text>
            </LiquidIf>
        </Section>
        <Section className="mt-6">
            <Link href="{{ invoice_url }}" className="bg-black px-4 py-2 text-white text-sm">PAY NOW</Link>
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

export default DraftOrderInvoice;
