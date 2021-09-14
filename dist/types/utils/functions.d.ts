export declare type FunctionArguments<T extends Function> = T extends (...args: infer R) => any ? R : never;
export declare function callAllHandlers<T extends (event: any) => void>(...fns: (T | undefined)[]): (event: FunctionArguments<T>[0]) => void;
//# sourceMappingURL=functions.d.ts.map