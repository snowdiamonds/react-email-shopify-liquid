# React Email Shopify Liquid

> Create shopify notification emails with a combination of React and Liquid

<p align="center">
    <img src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/8a7fe588-c2e7-4a67-958a-02014efeb539" width="400" />    
</p>


## Table of Contents

- [Getting Started](#getting-started)
- [Example templates](examples/emails)
- [Images](#images)
- [Important Notes](#important-notes)

## Problem

You are building a headless ecommerce experience using shopify. Probably with Hydrogen, Remix, NextJS, etc. 

You've built a set of composoble components using React, however there is one critical piece that is missing: Email Notifications. Emails for Order confirmation, shipping, etc.

You'll need to use Shopify's Liquid to build all of your email templates, which is a completely different developer experience than React. 

## This Solution

We've build a set of components using React Email to help you create beautiful email templates. Helping consolidate the developer experience when creating headless shopify store.

## Getting Started

**In your project directory:**

1. Install: `pnpm add react-email @react-email/components react-email-shopify-liquid -E`
2. Create an `emails` folder at the top level of your project directory.
3. Create a file named `OrderConfirmation.tsx` and paste the following: 

    > This template is from [`examples/emails/OrderConfirmation.tsx`](examples/emails/OrderConfirmation.tsx):

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

4. Add the following script to your `package.json` which will generate the email template html files

    ```
    "email:export": "email export && decode-entities"
    ```

    > This package includes a simple `decode-entities` bin script. React will encode things like quotes and `>`, `<`, which might be used within liquid expressins into html entites. Hence we need to decode those for liquid to render properly.

    > Example: `Payment of {{ order.total_outstanding | money }} is due {{ due_date | date: format: &#x27;date&#x27; }}` will become `Payment of {{ order.total_outstanding | money }} is due {{ due_date | date: format: 'date' }}` once decoded.

<details>

<summary>Decode entities advanced usage</summary>

1. If you have a more complex workflow, create your own script to handle decoding the html files.
    
    ```javascript
    #!/usr/bin/env node
    import { readFileSync, writeFileSync } from 'fs';
    import path from 'path';
    import { glob } from 'glob';
    import { decode } from 'html-entities';

    // React will encode quotes and etc that might be used within liquid expressions into entites.
    // Hence we need to decode those for liquid to render properly
    export const decodeEntities = () => {
        const generatedEmailPaths = glob.sync(path.join(process.cwd(), 'out', '**/*.html'))

        for (const emailPath of generatedEmailPaths) {
            const html = decode(readFileSync(emailPath, { 'encoding': 'utf-8' }));
            writeFileSync(emailPath, html, { encoding: 'utf-8' });
        }
    };

    decodeEntities();
    ```
</details>


5. Run the script `pnpm run email:export`. And look in the new folder `out` that was created. 
    -  This command will create a new directory `out` at the root level of your project. All of the generated html files for your email templates will be placed here. See react-email documentation for more information on the `email export` command. The default source directory for your templates is `emails`.


    <img width="629" alt="Screenshot 2024-04-22 at 11 43 30 AM" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/2c905381-c372-494f-bff4-6697a4769ff5">

6. **Let's preview the email template:** Head over to the shopify admin page.

7. Click on the `Settings` ⚙️ icon

    <img width="336" alt="step-1" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/185570ea-b17d-4914-963c-e523e83c2f4c">

8. Select the `Notifications` menu item

    <img width="345" alt="step-2" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/bcfea313-043e-45c7-8fae-3bd7698a45b4">

9. Click on the `Customer Notifications` menu item

    <img width="809" alt="step-3" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/959c95fb-cb73-47bc-b50c-db7c4e241b1c">

10. Select the `Order Confirmation` notification

    <img width="785" alt="step-4" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/ccb541f9-45ac-48a9-8a72-cf072a3e97d7">

11. Hit the `Edit Code` button

    <img width="917" alt="step-5" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/b0e334c9-b801-4ca3-a061-606cdddb86f7">

12. Paste the generated html from `OrderConfirmation.html` into the textarea

    <img width="827" alt="step-6" src="https://github.com/snowdiamonds/react-email-shopify-liquid/assets/1103708/61a23a35-d7cb-48c3-b345-e8e0b1a41759">


13. Preview your changes and hit save.

    > Can I preview my email templates with react-email's `email:dev` script? Yes, but it won't be that helpful. Since the templates include liquid template syntax for retrieving like order details, line items, product information, we need these objects provided to us. 

    > Shopify's email template preview functionality will actually render your email template using the liquid template engine and provide all the relevant objects like `order`, `product`, etc. The `email:dev` script would just render the raw liquid syntax.

14. **That's it.** Now, repeat for the rest of your email templates! Head over to [`examples/emails`](examples/emails) to see more templates.


## Images

1. You should either upload images to shopify as files, aws s3, or any other type of CDN.
2. Then use the CDN urls in the Image tags within the template.

## Important Notes

If you take a look at the default shopify email templates available in shopify admin, you'll see there is a lot of logic involved. Not every single piece of logic is ported over to this package. If any custom logic is required, just create your own component using our provided `Liquid` components. See the [example templates](examples/emails) for how this can be done.