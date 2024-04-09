import React from 'react';
import { Column, Row, Section, Text } from '@react-email/components';
import { LiquidCondition, LiquidFor, LiquidIf } from './Liquid';

const SaleTransactions = () => (
    <LiquidFor expression="transaction in order.transactions">
        <LiquidIf expression={'transaction.kind == "capture" or transaction.kind == "sale"'}>
            <Row>
                <Column align="left" className="align-top">
                    <LiquidCondition>
                        <LiquidCondition.If expression={'transaction.payment_details.gift_card_last_four_digits'}>
                            <Text className="m-0 p-0">
                                Gift card ending in {'{{ transaction.payment_details.gift_card_last_four_digits }}'}
                            </Text>
                        </LiquidCondition.If>
                        <LiquidCondition.ElseIf expression={'transaction.payment_details.credit_card_last_four_digits'}>
                            <Text className="m-0 p-0">
                                Card ending in {'{{ transaction.payment_details.credit_card_last_four_digits }}'}
                            </Text>
                        </LiquidCondition.ElseIf>
                        <LiquidCondition.Else>
                            <Text className="m-0 p-0">
                                {'{{ transaction.gateway_display_name }}'}
                            </Text>
                        </LiquidCondition.Else>
                    </LiquidCondition>
                    <LiquidIf expression={'transaction.status == "pending"'}>
                        <Text className="text-orange-500 ml-4 my-0 p-0">
                            PAYMENT PENDING
                        </Text>
                    </LiquidIf>
                    <LiquidIf expression={'transaction.status == "failure"'}>
                        <Text className="text-red-500 ml-4 my-0 p-0">
                            FAILURE
                        </Text>
                    </LiquidIf>
                </Column>
                <Column align="right" className="align-top">
                    <LiquidCondition>
                        <LiquidCondition.If expression={'transaction.status == "failure"'}>
                            <Text className="text-red-500 m-0 p-0">
                                {'{{ transaction.amount | money }}'}
                            </Text>
                        </LiquidCondition.If>
                        <LiquidCondition.Else>
                            <Text className="m-0 p-0">
                                {'{{ transaction.amount | money }}'}
                            </Text>
                        </LiquidCondition.Else>
                    </LiquidCondition>
                </Column>
            </Row>
        </LiquidIf>
    </LiquidFor>
);

const RefundTransaction = () => (
    <LiquidFor expression="transaction in order.transactions">
        <LiquidIf expression={'transaction.kind == "refund"'}>
            <Row>
                <Column align="left" className="align-top">
                    <LiquidCondition>
                        <LiquidCondition.If expression={'transaction.payment_details.gift_card_last_four_digits'}>
                            <Text className="m-0 p-0">
                                Refund to gift card ending in {'{{ transaction.payment_details.gift_card_last_four_digits }}'}
                            </Text>
                        </LiquidCondition.If>
                        <LiquidCondition.ElseIf expression={'transaction.payment_details.credit_card_last_four_digits'}>
                            <Text className="m-0 p-0">
                                Refund to card  ending in {'{{ transaction.payment_details.credit_card_last_four_digits }}'}
                            </Text>
                        </LiquidCondition.ElseIf>
                        <LiquidCondition.Else>
                            <Text className="m-0 p-0">
                                Refund to {'{{ transaction.gateway_display_name }}'}
                            </Text>
                        </LiquidCondition.Else>
                    </LiquidCondition>
                </Column>
                <Column align="right" className="align-top">
                    <Text className="m-0 p-0">
                        - {'{{ transaction.amount | money }}'}
                    </Text>
                </Column>
            </Row>
        </LiquidIf>
    </LiquidFor>
);

export const OrderTransactions = ({ showRefunds = false }: { showRefunds?: boolean }) => (
    <Section className="mt-4">
        <LiquidIf expression="order.transactions.size > 0">
            <Text className="font-bold m-0 p-0">PAYMENT</Text>
            {!showRefunds && <SaleTransactions />}
            {showRefunds && <RefundTransaction />}
        </LiquidIf>
    </Section>
);
