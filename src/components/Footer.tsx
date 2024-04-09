import React from 'react';
import { Column, Hr, Link, Row, Section, Text } from '@react-email/components';

export const Footer = () => (
    <Section className="mt-10">
        <Row>
            <Column align="center">
                <Link href="https://www.facebook.com" className="mx-8 text-sm text-black">FACEBOOK</Link>
                <Link href="https://www.instagram.com" className="mx-8 text-sm text-black">INSTAGRAM</Link>
                <Link href="https://www.linkedin.com" className="mx-8 text-sm text-black">LINKEDIN</Link>
                <Link href="https://snow-devil.myshopify.com" className="mx-8 text-sm text-black">CONTACT</Link>
            </Column>
        </Row>
        <Row className="mt-6">
            <Column align="center">
                <Text className="text-xs font-normal">{`© 2023-${new Date().getFullYear()} SNOW DEVIL. ALL RIGHTS RESERVED.`}</Text>
            </Column>
        </Row>
    </Section>
);
