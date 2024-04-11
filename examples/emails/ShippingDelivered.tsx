import React from 'react';
import { Preview } from '@react-email/components';
import { EmailContainer, FulfillmentNotificationType, FulfillmentStatus } from 'react-email-shopify-liquid';

const ShippingDelivered = () => (
    <EmailContainer>
        <Preview>Shipment Delivered</Preview>
        <FulfillmentStatus notificationType={FulfillmentNotificationType.Delivered} />
    </EmailContainer>
);

export default ShippingDelivered;
