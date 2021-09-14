import { ReactNode } from 'react';
export interface CardProps {
    content: {
        header: ReactNode[] | ReactNode;
        body: ReactNode[] | ReactNode;
        footer: ReactNode[] | ReactNode;
    };
}
export declare const Card: (props: CardProps) => JSX.Element;
//# sourceMappingURL=card.d.ts.map