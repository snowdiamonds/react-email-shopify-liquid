import React from 'react';
import { Hr, Link, Preview, Section, Text } from '@react-email/components';
import { EmailContainer, Greeting, LiquidCondition, LiquidIf, OrderLineItems, ShippingAddress, Subtotals } from 'react-email-shopify-liquid';

export const PaymentReminder = () => (
    <EmailContainer>
        <Preview>Payment Reminder</Preview>
        <Section>
            <Greeting />
            <Text>
                <LiquidCondition>
                    <LiquidCondition.If expression={'payment_schedule.overdue? and payment_schedule.number_of_days_overdue == 0'}>
                        Your payment is due today.
                    </LiquidCondition.If>
                    <LiquidCondition.ElseIf expression={'payment_schedule.due_later? and payment_schedule.due_in_days == 0'}>
                        Your payment is due today.
                    </LiquidCondition.ElseIf>
                    <LiquidCondition.ElseIf expression={'payment_schedule.overdue? and payment_schedule.number_of_days_overdue == 1'}>
                        Your payment was due yesterday.
                    </LiquidCondition.ElseIf>
                    <LiquidCondition.ElseIf expression={'payment_schedule.due_later? and payment_schedule.due_in_days == 1'}>
                        Your payment is due tomorrow.
                    </LiquidCondition.ElseIf>
                    <LiquidCondition.ElseIf expression={'payment_schedule.due_later? and payment_schedule.due_in_days > 1'}>
                        Your payment is due in {'{{ payment_schedule.due_in_days}}'} days.
                    </LiquidCondition.ElseIf>
                    <LiquidCondition.Else>
                        Your payment is {'{{ payment_schedule.number_of_days_overdue }}'} days overdue.
                    </LiquidCondition.Else>
                </LiquidCondition>
            </Text>
            <Text>
                This is a reminder that your payment of {'{{ payment_schedule.amount_due | money_with_currency }} for order {{ order.name }} is due on {{ payment_schedule.due_at | date: \'%B %e, %Y\' }}'}.
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
        <Hr className="border-black mt-10 mb-6"></Hr>
        <ShippingAddress />
    </EmailContainer>
);

export default PaymentReminder;
