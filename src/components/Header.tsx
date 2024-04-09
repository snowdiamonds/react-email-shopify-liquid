import React from 'react';
import { Column, Heading, Hr, Row, Section, Text } from '@react-email/components';

export const Header = () => (
    <Section className="mb-6">
        <Row className="my-4">
            <Column align="left"><Heading as="h1">SNOW DEVIL</Heading></Column>
        </Row>
        <Hr className="border-black my-0"></Hr>
    </Section>
);
