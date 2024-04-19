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

4. Generation TBD

5. Now head over to the shopify admin page

6. Click on the `Settings` ⚙️ icon

    <img width="336" alt="step-1" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/185570ea-b17d-4914-963c-e523e83c2f4c">

7. Select the `Notifications` menu item

    <img width="345" alt="step-2" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/bcfea313-043e-45c7-8fae-3bd7698a45b4">

8. Click on the `Customer Notifications` menu item

    <img width="809" alt="step-3" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/959c95fb-cb73-47bc-b50c-db7c4e241b1c">

9. Select the `Order Confirmation` notification

    <img width="785" alt="step-4" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/ccb541f9-45ac-48a9-8a72-cf072a3e97d7">

10. Hit the `Edit Code` button

    <img width="917" alt="step-5" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/b0e334c9-b801-4ca3-a061-606cdddb86f7">

11. Paste the generated html from `OrderConfirmation.html` into the textarea

    <img width="827" alt="step-6" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/61a23a35-d7cb-48c3-b345-e8e0b1a41759">


12. Preview your changes and hit save.


## Examples
