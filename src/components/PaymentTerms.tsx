import React from 'react';
import { Section, Text } from '@react-email/components';
import { LiquidCondition, LiquidIf } from './Liquid';

export const PaymentTerms = () => (
    <LiquidIf expression="payment_terms and payment_terms.automatic_capture_at_fulfillment == false">
        <Section>
            <LiquidCondition>
                <LiquidCondition.If expression={`payment_terms.type == \'receipt\' and payment_terms.next_payment.due_at == nil`}>
                    {'{% assign due_date = \'now\' %}'}
                </LiquidCondition.If>
                <LiquidCondition.Else>
                    {'{% assign due_date = payment_terms.next_payment.due_at | default: nil %}'}
                </LiquidCondition.Else>
            </LiquidCondition>
            <LiquidCondition>
                <LiquidCondition.If expression="payment_terms.type == 'fulfillment' and payment_terms.next_payment.due_at == nil and payment_terms.automatic_capture_at_fulfillment == false">
                    <Text>{'Payment of {{ order.total_outstanding | money }} is due on fulfillment'}</Text>
                </LiquidCondition.If>
                <LiquidCondition.Else>
                    <Text>{'Payment of {{ order.total_outstanding | money }} is due {{ due_date | date: format: \'date\' }}'}</Text>
                </LiquidCondition.Else>
            </LiquidCondition>
            <LiquidIf expression="custom_message">
                <Text>{'{{ custom_message }}'}</Text>
            </LiquidIf>
        </Section>
    </LiquidIf>
);
