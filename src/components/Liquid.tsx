import React from 'react';

export interface LiquidProps {
    children: React.ReactNode;
    expression: string;
}

export const LiquidBlock = ({ children }: React.PropsWithChildren) => children;

export const LiquidIf = ({ expression, children }: LiquidProps) => (
    <>
        {`{% if ${expression} %}`}
        {children}
        {'{% endif %}'}
    </>
);

export const LiquidUnless = ({ expression, children }: LiquidProps) => (
    <>
        {`{% unless ${expression} %}`}
        {children}
        {'{% endunless %}'}
    </>
);

export const LiquidElseIf = ({ expression, children }: LiquidProps) => (
    <>
        {`{% elseif ${expression} %}`}
        {children}
    </>
);

export const LiquidElse = ({ children }: React.PropsWithChildren) => (
    <>
        {'{% else %}'}
        {children}
    </>
);

export const LiquidFor = ({ expression, children }: LiquidProps) => (
    <>
        {`{% for ${expression} %}`}
        {children}
        {'{% endfor %}'}
    </>
);

export const LiquidCapture = ({ name, children }: { name: string } & React.PropsWithChildren) => <>{`{% capture ${name} %}`} {children} {'{% endcapture %}'}</>;

export const LiquidAssign = ({ name, children }: { name: string } & React.PropsWithChildren) => `{% assign ${name} = ${children} %}`;

export const LiquidCondition = ({ children }: React.PropsWithChildren) => (
    <>
        {children}
        {'{% endif %}'}
    </>
);

// eslint-disable-next-line react/display-name
LiquidCondition.If = ({ expression, children }: LiquidProps) => (
    <>
        {`{% if ${expression} %}`}
        {children}
    </>
);

// eslint-disable-next-line react/display-name
LiquidCondition.ElseIf = ({ expression, children }: LiquidProps) => (
    <>
        {`{% elsif ${expression} %}`}
        {children}
    </>
);

// eslint-disable-next-line react/display-name
LiquidCondition.Else = ({ children }: React.PropsWithChildren) => (
    <>
        {'{% else %}'}
        {children}
    </>
);
