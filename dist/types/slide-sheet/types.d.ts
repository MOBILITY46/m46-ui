import type { ReactNode } from 'react';
export declare type CallBack = () => void;
export interface Props {
    id?: string;
    isOpen: boolean;
    onClose(): void;
    children: ReactNode | ReactNode[];
    maskClosable?: boolean;
    debug?: boolean;
}
//# sourceMappingURL=types.d.ts.map