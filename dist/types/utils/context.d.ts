import * as React from 'react';
export interface CreateContextOptions {
    errorMessage?: string;
    name?: string;
}
declare type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];
/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export declare function createContext<ContextType>(options?: CreateContextOptions): CreateContextReturn<ContextType>;
export {};
//# sourceMappingURL=context.d.ts.map