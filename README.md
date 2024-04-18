# React Email Shopify Liquid

> Create shopify notification emails with a combination of React and Liquid

<p align="center">
    <img src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/8a7fe588-c2e7-4a67-958a-02014efeb539" width="400" />    
</p>


## Problem

You are building a headless ecommerce experience using shopify. Probably with Hydrogen, Remix, NextJS, etc. 

You've built a set of composoble components using React, however there is one critical piece that is missing: Email Notifications. Emails for Order confirmation, shipping, etc.

You'll need to use Shopify's Liquid to build all of your email templates, which is a completely different developer experience than React. 

## This Solution

We've build a set of components using React Email to help you create beautiful email templates. Helping consolidate the developer experience when creating headless shopify store.

## Setup

In your project directory:

1. Install: `pnpm add react-email @react-email/components react-email-shopify-liquid -E`
2. Create an `emails` folder at the top level of your project directory.
3. Create a file named `OrderConfirmation.tsx` and paste the following:

```jsx
import React from 'react';
import { Hr, Preview, Section, Text } from '@react-email/components';
import { EmailContainer, Greeting, OrderLineItems, OrderStatusLink, OrderTransactions, PaymentTerms, ShippingAddress, Subtotals } from 'react-email-shopify-liquid';

export const OrderConfirmation = () => (
    <EmailContainer>
        <Preview>Order Confirmation</Preview>
        <Section>
            <Greeting />
            <Text>
                Thank you for placing your order ({'{{ order.name }}'}). As soon as your order ships, you will receive a separate shipping confirmation email with tracking information.
            </Text>
        </Section>
        <Section className="mt-6">
            <OrderStatusLink />
        </Section>
        <Hr className="border-black my-10"></Hr>
        <OrderLineItems />
        <Subtotals />
        <Hr className="border-black my-10"></Hr>
        <PaymentTerms />
        <OrderTransactions />
        <ShippingAddress />
    </EmailContainer>
);

export default OrderConfirmation;
```

## Examples
