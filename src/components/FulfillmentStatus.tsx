import React from 'react';
import { Hr, Link, Section, Text } from '@react-email/components';
import { Greeting } from './Greeting';
import { LiquidBlock, LiquidCondition, LiquidIf } from './Liquid';
import { OrderLineItems } from './OrderLineItems';
import { ShippingAddress } from './ShippingAddress';

export enum FulfillmentNotificationType {
    InRoute,
    OutForDelivery,
    Delivered
}

export interface FulfillmentStatusProps {
    notificationType: FulfillmentNotificationType
}

export const FulfillmentStatus = ({ notificationType }: FulfillmentStatusProps) => (
    <>
        <Section>
            <Greeting />
            <LiquidBlock>
                {notificationType === FulfillmentNotificationType.InRoute &&
                    `
                            {% if fulfillment.item_count == item_count %}
                                {% capture email_body %}Your order is on the way. Track your shipment to see the delivery status.{% endcapture %}
                            {% elsif fulfillment.item_count > 1 %}
                                {% if fulfillment_status == 'fulfilled' %}
                                    {% capture email_body %}The last items in your order are on the way. Track your shipment to see the delivery status.{% endcapture %}
                                {% else %}
                                    {% capture email_body %}Some items in your order are on the way. Track your shipment to see the delivery status.{%
                                endcapture %}
                                {% endif %}
                            {% else %}
                                {% if fulfillment_status == 'fulfilled' %}
                                    {% capture email_body %}The last item in your order is on the way. Track your shipment to see the delivery status.{% endcapture %}
                                {% else %}
                                    {% capture email_body %}One item in your order is on the way. Track your shipment to see the delivery status.{% endcapture %}
                                {% endif %}
                            {% endif %}
                            
                            {% capture email_emphasis %}Estimated delivery date: <strong>{{fulfillment.estimated_delivery_at | date: format:
                            'date'}}</strong>{% endcapture %}
                    `}
                {notificationType === FulfillmentNotificationType.OutForDelivery &&
                    `
                            {% if fulfillment.item_count == item_count %} 
                            {% capture email_title %}Your order is out for delivery.{% endcapture %}
                            {% capture email_body %}Your order is out for delivery. Track your shipment to see the delivery status.{% endcapture %}
                            {% elsif fulfillment.item_count > 1 %} 
                            {% if fulfillment_status == 'fulfilled' %}
                            {% capture email_title %}The last items in your order are out for delivery.{% endcapture %}
                            {% capture email_body %}The last items in your order are out for delivery. Track your shipment to see the delivery status.{% endcapture %}
                            {% else %}
                            {% capture email_title %}Some items in your order are out for delivery.{% endcapture %}
                            {% capture email_body %}Some items in your order are out for delivery. Track your shipment to see the delivery status.{% endcapture %}
                            {% endif %}
                            {% else %} 
                            {% if fulfillment_status == 'fulfilled' %}
                            {% capture email_title %}The last item in your order is out for delivery.{% endcapture %}
                            {% capture email_body %}The last item in your order is out for delivery. Track your shipment to see the delivery status.{% endcapture %}
                            {% else %}
                            {% capture email_title %}One item in your order is out for delivery.{% endcapture %}
                            {% capture email_body %}One item in your order is out for delivery. Track your shipment to see the delivery status.{% endcapture %}
                            {% endif %}
                            {% endif %}

                            {% capture email_emphasis %}Estimated delivery date: <strong>{{fulfillment.estimated_delivery_at | date: format: 'date'}}</strong>{% endcapture %}
                    `}
                {notificationType === FulfillmentNotificationType.Delivered &&
                    `
                            {% if fulfillment.item_count == item_count %} 
                            {% capture email_title %}Your order has been delivered{% endcapture %}
                            {% capture email_body %}Your order has been delivered. Track your shipment to see the delivery status.{% endcapture %}
                            {% elsif fulfillment.item_count > 1 %} 
                            {% if fulfillment_status == 'fulfilled' %}
                                {% capture email_title %}The last items in your order have been delivered{% endcapture %}
                                {% capture email_body %}The last items in your order have been delivered. Track your shipment to see the delivery status.{% endcapture %}
                            {% else %}
                                {% capture email_title %}Some items in your order have been delivered{% endcapture %}
                                {% capture email_body %}Some items in your order have been delivered. Track your shipment to see the delivery status.{% endcapture %}
                            {% endif %}
                            {% else %} 
                            {% if fulfillment_status == 'fulfilled' %}
                                {% capture email_title %}The last item in your order has been delivered{% endcapture %}
                                {% capture email_body %}The last item in your order has been delivered. Track your shipment to see the delivery status.{% endcapture %}
                            {% else %}
                                {% capture email_title %}One item in your order has been delivered{% endcapture %}
                                {% capture email_body %}One item in your order has been delivered. Track your shipment to see the delivery status.{% endcapture %}
                            {% endif %}
                            {% endif %}

                            {% capture email_emphasis %}Estimated delivery date: <strong>{{fulfillment.estimated_delivery_at | date: format: 'date'}}</strong>{% endcapture %}
                    `
                }
            </LiquidBlock>
            <Text>
                {'{{ email_body }}'}
            </Text>
            <LiquidIf expression="fulfillment.estimated_delivery_at">
                <Text>
                    {'{{ email_emphasis }}'}
                </Text>
            </LiquidIf>
        </Section>
        <Section className="mt-6">
            <LiquidIf expression="fulfillment.tracking_numbers.size > 0">
                <LiquidCondition>
                    <LiquidCondition.If expression="fulfillment.tracking_numbers.size == 1 and fulfillment.tracking_company and
        fulfillment.tracking_url">
                        <Link href="{{ fulfillment.tracking_url }}" className="bg-black px-4 py-2 text-white">{'{{ fulfillment.tracking_company }} {{ fulfillment.tracking_numbers.first }}'}</Link>
                    </LiquidCondition.If>
                    <LiquidCondition.Else>
                        <Text className="font-bold">Tracking Number</Text>
                        <Text>{'{{ fulfillment.tracking_numbers.first }}'}</Text>
                    </LiquidCondition.Else>
                </LiquidCondition>
            </LiquidIf>
        </Section>
        <Hr className="border-black my-10"></Hr>
        <OrderLineItems showPrice={false} title="ITEMS IN THIS SHIPMENT" lineItemsVariable="fulfillment.fulfillment_line_items" />
        <Section className="mt-6">
            <Link href="{{ order.order_status_url }}" className="bg-black px-4 py-2 text-white">VIEW ORDER STATUS</Link>
        </Section>
        <Hr className="border-black mt-10 mb-6"></Hr>
        <ShippingAddress />
    </>
);
