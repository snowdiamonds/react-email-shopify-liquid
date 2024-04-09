import React from 'react';
import { Text } from '@react-email/components';
import { LiquidCapture, LiquidCondition } from './Liquid';

export const Greeting = () => (
    <>
        <LiquidCapture name="message_greeting">
            <LiquidCondition>
                <LiquidCondition.If expression="customer.first_name">
          Hello {'{{customer.first_name}}'},
                </LiquidCondition.If>
                <LiquidCondition.Else>
          Hello,
                </LiquidCondition.Else>
            </LiquidCondition>
        </LiquidCapture>
        <Text className="mt-0">
            {'{{ message_greeting }}'}
        </Text>
    </>
);
