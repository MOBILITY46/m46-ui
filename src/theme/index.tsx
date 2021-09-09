import * as React from 'react'
import '@fontsource/dm-sans'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export type Color = 'black' | 'white' | 'primary' | 'secondary' | 'tertiary' | 'gray' | 'blackAlpha'

export const colors = {
  black: '#000000',
  white: '#ffffff',
  primary: {
    '50': '#e8f4ff',
    '100': '#d2e9ff',
    '200': '#a5d3ff',
    '300': '#78bcff',
    '500': '#4ba6ff',
    '400': '#ie90ff',
    '600': '#1873cc',
    '700': '#125699',
    '800': '#0c3a66',
    '900': '#061d33',
  },
  secondary: {
    '50': '#f1fdf7',
    '100': '#e3faef',
    '200': '#c7f5df',
    '300': '#abf1ce',
    '400': '#8fecbe',
    '500': '#73e7ae',
    '600': '#5cb98b',
    '700': '#458b68',
    '800': '#2e5c46',
    '900': '#172e23',
  },
  tertiary: {
    '50': '#e5eff1',
    '100': '#ccdfe2',
    '200': '#99bfc5',
    '300': '#66a0a9',
    '400': '#33808c',
    '500': '#00606f',
    '600': '#004d59',
    '700': '#003a43',
    '800': '#00262c',
    '900': '#001316',
  },
  gray: {
    '50': '#f4f4f4',
    '100': '#e9e9e9',
    '200': '#d4d4d4',
    '300': '#bebebe',
    '400': '#e5e5e5',
    '500': '#939393',
    '600': '#767676',
    '700': '#585858',
    '800': '#ebebeb',
    '900': '#1d1d1d',
  },
  blackAlpha: {
    '50': '#f5f5f5',
    '100': '#f0f0f0',
    '200': '#ebebeb',
    '300': '#d6d6d6',
    '400': '#c2c2c2',
    '500': '#a3a3a3',
    '600': '#858585',
    '700': '#5c5c5c',
    '800': '#333333',
    '900': '#141414',
  },
}

export const theme = extendTheme({
  colors,
  fonts: {
    heading: 'DM Sans',
    body: 'DM Sans',
  },
})

export const UIProvider: React.FC = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>
