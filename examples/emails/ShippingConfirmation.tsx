import React from 'react';
import { Preview } from '@react-email/components';
import { EmailContainer, FulfillmentNotificationType, FulfillmentStatus } from 'react-email-shopify-liquid';

export const ShippingConfirmation = () => (
    <EmailContainer>
        <Preview>Shipping Confirmation</Preview>
        <FulfillmentStatus notificationType={FulfillmentNotificationType.InRoute} />
    </EmailContainer>
);

export default ShippingConfirmation;
