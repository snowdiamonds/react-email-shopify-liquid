import React from 'react';
import { Preview, Section, Text } from '@react-email/components';
import { EmailContainer } from 'react-email-shopify-liquid';

const ContactCustomer = () => (
    <EmailContainer>
        <Preview>New Message</Preview>
        <Section className="mb-6">
            <Text>
                {'{{ custom_message }}'}
            </Text>
        </Section>
    </EmailContainer>
);

export default ContactCustomer;
