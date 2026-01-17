"use strict";
// let variable: type;
// let variable: type = 1;
Object.defineProperty(exports, "__esModule", { value: true });
// variable = newValue;
// ------------boolean-----------------------------------------
// let isBool: boolean = true;
// isBool = false;
// isBool = '';
// isBool = 123;
// ------------number-----------------------------------------
// let num: number = 123; 
// // Number.MIN_SAFE_INTEGER;
// // Number.MAX_SAFE_INTEGER; 
// num = 321;
// num = 'str';
// num = true;
// num = 100n
// ------------bigint-----------------------------------------
// let bigNum: bigint = 100n;
// bigNum = 300n;
// bigNum = 123;
// ------------string-----------------------------------------
// let str: string = 'Hello, world';
// str = '';
// str = 123;
// ------------null/undefined-----------------------------------------
// let nullVar: null = null;
// nullVar = undefined;
// let undefinedVar: undefined = undefined;
// undefinedVar = null;
// ------------Symbol-----------------------------------------
// const isSymbol: Symbol = Symbol('123');
// ---------------------------------------------------------------------------------------------------------
// ------------object-----------------------------------------
// let objectVar: object = {};
// objectVar = {};
// objectVar = [];
// objectVar = () => {};
// objectVar = new Date();
// objectVar = 1;
// objectVar = 'hi';
// objectVar = null;
// objectVar.toString();
// let objectVar: Object = {};
// objectVar = {};
// objectVar = [];
// objectVar = () => {};
// objectVar = new Date();
// objectVar = 1;
// objectVar = 'hi';
// objectVar = null;
// objectVar.toString();
// let objectVar: {} = {};
// objectVar = {};
// objectVar = [];
// objectVar = () => {};
// objectVar = new Date();
// objectVar = 1;
// objectVar = 'hi';
// objectVar = null;
// objectVar.toString();
// ------------------------------------------
// let objectVar: {
//     readonly a: string;
//     b?: number;
//     c: {
//         d: boolean;
//     }
// } = {
//     a: 'str',
//     // b: 123,
//     b: undefined,
//     c: {
//         d: true,
//     }
// };
// objectVar.a = '123';
// ------------array-----------------------------------------
// let arrayVar: string[] = ['str'];
// let arrayVar: ({a: string; b: number})[] = [{a: 'str', b: 123}];
// let arrayVar: ((string)[])[] = [['str']];
// ------------tuple-----------------------------------------
// let tupleVar: [string, number, {a: boolean}] = ['str', 321, {a: true}];
// tupleVar = ['str', 321, {a: true}];
// tupleVar[1] = 123;
// ------------functions-----------------------------------------
// const calculate: (a: number, b?: number) => number = (a, b) => {
//     return a + (b || 0);
// };
// const calculate: (a: number, b?: number) => number = (a, b = 0) => {
//     return a + b;
// };
// const calculate = (a: number, b: number): number => {
//     return a + b;
// };
// const calculate = (a: number, b?: number): number => {
//     return a + (b || 0);
// };
// const calculate = (a: number, b: number = 0): number => {
//     return a + b;
// };
// function calculate(a: number, b: number = 0): number {
//     return a + b;
// }
// calculate(123);
// function invoke(callback: (a: number, b: number) => number): void {
//     callback(123, 321);
// }
// function invoke(callback: (a: number, b: number) => number): string | undefined {
//     const result = callback(123, 321);
//     if (result > 10) {
//         return;
//     }
//     // .....
//     return 'string';
// }
// invoke(calculate)
// ------------any-----------------------------------------
// let anyVar: any;
// let testNumberForAnyVar: number;
// anyVar = 1;
// anyVar = '1';
// anyVar = true;
// anyVar = [];
// anyVar = {};
// anyVar.a;
// anyVar[12] = 123;
// anyVar.update();
// testNumberForAnyVar = anyVar;
// ------------unknown-----------------------------------------
// let unknownVar: unknown;
// let testNumberForUnknownVar: number;
// unknownVar = 1;
// unknownVar = '1';
// unknownVar = true;
// unknownVar = [];
// unknownVar = {};
// unknownVar.a;
// unknownVar[12] = 123;
// unknownVar.update();
// testNumberForUnknownVar = unknownVar;
// ------------literal types-----------------------------------------
// let fontWeight: string = '123123';
// fontWeight = 'adfas';
// let fontWeight: 'bold' = 'bold';
// let fontWeight: 500 = 500;
// ------------union types-----------------------------------------
// let fontWeight: 'bold' | 500 | 400 | 900 = 'bold';
// fontWeight = 400;
// fontWeight = 300;
// let numberOrString: string | number = 'true';
// function getProperty(
//     obj: {a: string; d: string} | {b: boolean, d: string}
// ) {}
// getProperty({a: 'str', d: 'string'})
// getProperty({b: true, d: 'string'})
// getProperty({d: 'string'})
// const defaultA: {a: string; d: string} = {
//     a: 'str',
//     d: 'trs',
// }
// let testObj: {a: string; d: string} | {b: boolean, d: string} = defaultA;
// function calculateButtonSize(size: 's' | 'm' | 'l') {}
// calculateButtonSize('m')
// ------------intersection types-----------------------------------------
// let testVar: number & string;
// let fontWeight: ('bold' | 500 | 400 | 900) & string = 'bold';
// let fontWeight: number | (number & string);
// let testObjVar: {a: string} & {b: string} = {
//     a: 'str',
//     b: '312',
// };
// let testObjVar: {a: string; b: string};
// let testObjVar: {a: string, b: number} & {b: string | number} = {
//     a: 'str',
//     b: 213,
// };
