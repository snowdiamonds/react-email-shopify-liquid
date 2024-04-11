import React from 'react';
import { Preview } from '@react-email/components';
import { EmailContainer, FulfillmentNotificationType, FulfillmentStatus } from 'react-email-shopify-liquid';

const ShippingUpdated = () => (
    <EmailContainer>
        <Preview>Shipment Status Updated</Preview>
        <FulfillmentStatus notificationType={FulfillmentNotificationType.InRoute}/>
    </EmailContainer>
);

export default ShippingUpdated;
