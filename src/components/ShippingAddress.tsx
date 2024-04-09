import React from 'react';
import { Column, Row, Section, Text } from '@react-email/components';
import { LiquidIf } from './Liquid';

export const ShippingAddress = () => (
    <Section className="mt-4">
        <LiquidIf expression="order.shipping_address">
            <Row>
                <Column align="left">
                    <Text className="m-0 p-0">SHIPPING ADDRESS</Text>
                    <Text className="m-0 p-0">{'{{ order.shipping_address.first_name }} {{ order.shipping_address.last_name }}'}</Text>
                    <Text className="m-0 p-0">{'{{ order.shipping_address.street }}'}</Text>
                    <Text className="m-0 p-0">{'{{ order.shipping_address.city }}, {{ order.shipping_address.province }} {{ order.shipping_address.zip }}'}</Text>
                    <Text className="m-0 p-0">{'{{ order.shipping_address.country && order.shipping_address.country.name }}'}</Text>
                    <Text className="m-0 p-0">{'{{ order.shipping_address.phone }}'}</Text>
                </Column>
            </Row>
        </LiquidIf>
        <LiquidIf expression="order.billing_address">
            <Row className="mt-4">
                <Column align="left">
                    <Text className="m-0 p-0">BILLING ADDRESS</Text>
                    <Text className="m-0 p-0">{'{{ order.billing_address.first_name }} {{ order.billing_address.last_name }}'}</Text>
                    <Text className="m-0 p-0">{'{{ order.billing_address.street }}'}</Text>
                    <Text className="m-0 p-0">{'{{ order.billing_address.city }}, {{ order.billing_address.province }} {{ order.billing_address.zip }}'}</Text>
                    <Text className="m-0 p-0">{'{{ order.billing_address.country && order.billing_address.country.name }}'}</Text>
                    <Text className="m-0 p-0">{'{{ order.billing_address.phone }}'}</Text>
                </Column>
            </Row>
        </LiquidIf>
    </Section>
);
