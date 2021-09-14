import { FC } from 'react';
import { StyleProps, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { Color } from '../theme';
export interface ButtonProps {
    colorScheme?: Color;
    variant?: 'solid' | 'outline' | 'link' | 'ghost';
    rounded?: boolean;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    size?: 'lg' | 'md' | 'sm' | 'xs';
}
/**
 * A Chakra button with some overridden values.
 */
export declare const Button: FC<ButtonProps & StyleProps & ChakraButtonProps>;
//# sourceMappingURL=index.d.ts.map