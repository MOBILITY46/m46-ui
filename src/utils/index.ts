export * from './context'
export * from './assertions'
export * from './functions'
export * from './use-measure'
export * from './use-callback-ref'

export type As<Props = any> = React.ElementType<Props>

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}
