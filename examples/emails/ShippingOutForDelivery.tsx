import React from 'react';
import { Preview } from '@react-email/components';
import { EmailContainer, FulfillmentNotificationType, FulfillmentStatus } from 'react-email-shopify-liquid';

const ShippingOutForDelivery = () => (
    <EmailContainer>
        <Preview>Shipment out for Delivery</Preview>
        <FulfillmentStatus notificationType={FulfillmentNotificationType.OutForDelivery}/>
    </EmailContainer>
);

export default ShippingOutForDelivery;
