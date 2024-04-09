import React from 'react';
import { Column, Img, Row, Section, Text } from '@react-email/components';
import { LiquidFor } from './Liquid';

export interface LineItemProps {
    showPrice: boolean,
    lineItemsVariable: string
};

export const DefaultLineItem = ({ showPrice, lineItemsVariable }: LineItemProps) => {
    const lineItemVariable = lineItemsVariable.startsWith('subtotal') ? 'line' : 'line.line_item';
    return (
        <>
            <Column align="left" className="align-top" width="148px">
                <Img src={`{{ ${lineItemVariable}.image | img_url: 'compact_cropped' }}`} width="148" />
            </Column>
            <Column className="pl-4 align-top">
                <Text className="text-sm font-normal m-0 p-0">{`{{ ${lineItemVariable}.product.title | upcase }}`}</Text>
                <Text className="text-sm font-normal m-0 p-0">SKU: {`{{ ${lineItemVariable}.product.variants[0].sku | upcase }}`}</Text>
            </Column>
            {showPrice && <Column className="align-top" align="right">
                <Text className="text-sm font-normal m-0 p-0">{`{{ ${lineItemVariable}.final_line_price | money }}`}</Text>
            </Column>}
        </>
    );
};

export interface OrderLineItemsProps {
    title?: string;
    lineItemsVariable?: string,
    showPrice?: boolean,
    LineItem?: ({ lineItemsVariable, showPrice }: LineItemProps) => React.JSX.Element
};

export const OrderLineItems = ({ title = 'ORDER', lineItemsVariable = 'subtotal_line_items', showPrice = true, LineItem = DefaultLineItem }) => (
    <Section>
        <Row>
            <Column align="left">
                <Text className="text-sm font-bold m-0 p-0">{title} {'{{ order.name }}'}</Text>
            </Column>
        </Row>
        <LiquidFor expression={`line in ${lineItemsVariable}`}>
            <Row className="my-6">
                <LineItem lineItemsVariable={lineItemsVariable} showPrice={showPrice} />
            </Row>
        </LiquidFor>
    </Section>

);
