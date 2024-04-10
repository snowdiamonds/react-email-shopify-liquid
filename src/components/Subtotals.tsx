import React from 'react';
import { Column, Row, Section, Text } from '@react-email/components';

export const Subtotals = () => (
    <Section>
        <Row>
            <Column align="left" className="align-top">
                <Text className="text-sm font-normal my-0 p-0">Subtotal</Text>
            </Column>
            <Column align="right" className="align-top">
                <Text className="text-sm font-normal my-0 p-0">{'{{ subtotal_price | money }}'}</Text>
            </Column>
        </Row>
        <Row>
            <Column align="left" className="align-top">
                <Text className="text-sm font-normal my-0 p-0">Discount</Text>
            </Column>
            <Column align="right" className="align-top">
                <Text className="text-sm font-normal my-0 p-0">{'{{ total_discounts | money }}'}</Text>
            </Column>
        </Row>
        <Row className="mt-2 p-0">
            <Column align="left" className="align-top">
                <Text className="text-sm font-normal my-0 p-0">Shipping</Text>
            </Column>
            <Column align="right" className="align-top">
                <Text className="text-sm font-normal my-0 p-0">{'{{ shipping_price | money }}'}</Text>
            </Column>
        </Row>
        <Row className="mt-2 p-0">
            <Column align="left" className="align-top">
                <Text className="text-sm font-normal my-0 p-0">Taxes</Text>
            </Column>
            <Column align="right" className="align-top">
                <Text className="text-sm font-normal my-0 p-0">{'{{ tax_price | money }}'}</Text>
            </Column>
        </Row>
        <Row className="mt-6 p-0">
            <Column align="left" className="align-top">
                <Text className="text-sm font-bold my-0 p-0">Total</Text>
            </Column>
            <Column align="right" className="align-top">
                <Text className="text-sm font-bold my-0 p-0">{'{{ total_price | money }}'}</Text>
            </Column>
        </Row>
    </Section>
);
