export type FunctionArguments<T extends Function> = T extends (...args: infer R) => any ? R : never

export function isFunction<T extends Function = Function>(value: any): value is T {
  return typeof value === 'function'
}

export function callAllHandlers<T extends (event: any) => void>(...fns: (T | undefined)[]) {
  return function func(event: FunctionArguments<T>[0]) {
    fns.some((fn) => {
      fn?.(event)
      return event?.defaultPrevented
    })
  }
}

export function runIfFn<T, U>(valueOrFn: T | ((...fnArgs: U[]) => T), ...args: U[]): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn
}
