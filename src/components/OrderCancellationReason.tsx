import React from 'react';
import { Text } from "@react-email/components";
import { LiquidBlock } from "./Liquid";

// TODO: convert to react components
export const OrderCancellationReason = () => {
    return (
        <>
            <LiquidBlock>
                {
                    `
                {% capture cancellation_reason %}
                    {% if financial_status == 'voided' %}
                        {% case cancel_reason %}
                        {% when 'customer' %}
                        Order {{ name }} was canceled at your request and your payment has been voided.
                        {% when 'inventory' %}
                        Order {{ name }} was canceled because we did not have enough stock to fulfill your order and your payment has been voided.
                        {% when 'fraud' %}
                        Order {{ name }} was canceled because of unforeseen circumstances and your payment has been voided.
                        {% when 'declined' %}
                        Order {{ name }} was canceled because your payment was declined.
                        {% when 'staff' %}
                        Order {{ name }} was canceled because of staff error and your payment has been voided.
                        {% when 'other' %}
                        Order {{ name }} was canceled because of unforeseen circumstances and your payment has been voided.
                        {% endcase %}
                    {% elsif financial_status == 'refunded' %}
                        {% case cancel_reason %}
                        {% when 'customer' %}
                        Order {{ name }} was canceled at your request and your payment has been refunded.
                        {% when 'inventory' %}
                        Order {{ name }} was canceled because we did not have enough stock to fulfill your order and your payment has been refunded.
                        {% when 'fraud' %}
                        Order {{ name }} was canceled because of unforeseen circumstances and your payment has been refunded.
                        {% when 'declined' %}
                        Order {{ name }} was canceled because your payment was declined.
                        {% when 'staff' %}
                        Order {{ name }} was canceled because of staff error and your payment has been refunded.
                        {% when 'other' %}
                        Order {{ name }} was canceled because of unforeseen circumstances and your payment has been refunded.
                        {% endcase %}
                    {% elsif financial_status == 'paid' %}
                        {% case cancel_reason %}
                        {% when 'customer' %}
                        Order {{ name }} was canceled at your request and your payment has not yet been refunded.
                        {% when 'inventory' %}
                        Order {{ name }} was canceled because we did not have enough stock to fulfill your order and your payment has not yet been refunded.
                        {% when 'fraud' %}
                        Order {{ name }} was canceled because of unforeseen circumstances and your payment has not yet been refunded.
                        {% when 'declined' %}
                        Order {{ name }} was canceled because your payment was declined.
                        {% when 'staff' %}
                        Order {{ name }} was canceled because of staff error and your payment has not yet been refunded.
                        {% when 'other' %}
                        Order {{ name }} was canceled because of unforeseen circumstances and your payment has not yet been refunded.
                        {% endcase %}
                    {% endif %}
                    {% endcapture %}
                `
                }
            </LiquidBlock>
            <Text>{'{{ cancellation_reason }}'}</Text>
        </>
    )
};