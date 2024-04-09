import React from 'react';
import { Body, Container, Head, Html, Tailwind, Font } from '@react-email/components';
import { Footer as DefaultFooter } from './Footer';
import { Header as DefaultHeader } from './Header';

export interface EmailContainerProps {
    Header?: () => React.JSX.Element,
    Footer?: () => React.JSX.Element,
};

export const EmailContainer = ({ children, Header = DefaultHeader, Footer = DefaultFooter }: EmailContainerProps & React.PropsWithChildren) => (
    <Tailwind>
        <Html>
            <Head>
                <meta name="viewport" content="width=device-width" />
            </Head>
            <Body className="bg-white">
                <Container className="bg-white px-6 py-8">
                    <Header />
                    {children}
                    <Footer />
                </Container>
            </Body>
        </Html>
    </Tailwind>
);
