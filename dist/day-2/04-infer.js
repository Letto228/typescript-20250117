"use strict";
// function call(cb: (...args: any[]) => unknown, ...args: unknown[]): unknown {
//     return cb(...args);
// }
// ------------------------------------------------------------------------------
// function call<Arguments extends unknown[], ReturnType>(
//     cb: (...args: Arguments) => ReturnType,
//     ...args: Arguments
// ): ReturnType {
//     return cb(...args);
// }
// const callback = (a: boolean, b: string, c: number): {a: number, c: {d: boolean}} => {
//     return {
//         a: c,
//         c: {
//             d: a
//         }
//     }
// }
// call(callback, true, '', 123);
// ------------------------------------------------------------------------------
// type MyArguments<Function extends (...args: any[]) => any> = Function extends (...args: infer CalculatedArguments) => any
//     ? CalculatedArguments
//     : never
// type MyReturnType<Function extends (...args: any[]) => any> = Function extends (...args: any[]) => infer CalculatedReturnType
//     ? CalculatedReturnType
//     : never
// function call<Callback extends (...args: any[]) => any>(
//     cb: Callback,
//     ...args: MyArguments<Callback>
// ): MyReturnType<Callback> {
//     return cb(...args);
// }
// const callback = (a: boolean, b: string, c: number): {a: number, c: {d: boolean}} => {
//     return {
//         a: c,
//         c: {
//             d: a
//         }
//     }
// }
// call(callback, true, 'str', 32);
// type GetMovieFunction = (request: {url: string}) => {title: string, duration: number};
// type GetMovieReturnType = MyReturnType<GetMovieFunction>
// type GetMovieArguments = MyArguments<GetMovieFunction>
// ------------------------------------------------------------------------------
// type PromiseValue<PromiseInstance extends Promise<unknown>> = PromiseInstance extends Promise<infer PromiseValue>
//     ? PromiseValue
//     : never;
// const testPromise = new Promise<string>((resolve) => {
//     resolve('String');
// });
// type ExternalPromiseValue = PromiseValue<typeof testPromise>
