import React from 'react';
import { Hr, Preview, Section, Text } from '@react-email/components';
import { EmailContainer, Greeting, LiquidBlock, OrderLineItems, OrderTransactions, ShippingAddress, Subtotals } from 'react-email-shopify-liquid';

const OrderRefund = () => (
    <EmailContainer>
        <Preview>Order Refund</Preview>
        <LiquidBlock>
            {
                `
                        {% if refund_line_items.size == item_count %}
                            {% capture email_title %}Your order has been refunded.{% endcapture %}
                        {% elsif refund_line_items.size == 0 %}
                            {% capture email_title %}You have received a refund.{% endcapture %}
                        {% else %}
                            {% capture email_title %}Some items in your order have been refunded.{% endcapture %}
                        {% endif %}
                        {% capture email_body %}Total amount refunded: <strong>{{ amount | money_with_currency }}</strong>. It may take up to 10 days for this refund to appear in your account.{% endcapture %}              
                    `
            }
        </LiquidBlock>
        <Section>
            <Greeting />
            <Text>
                {'{{ email_title }}'}
            </Text>
            <Text>
                {'{{ email_body }}'}
            </Text>
        </Section>
        <Hr className="border-black my-10"></Hr>
        <OrderLineItems />
        <Subtotals />
        <Hr className="border-black mt-10 mb-6"></Hr>
        <OrderTransactions />
        <ShippingAddress />
    </EmailContainer>
);

export default OrderRefund;
