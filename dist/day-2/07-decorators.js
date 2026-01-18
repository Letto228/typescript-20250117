"use strict";
// class Calculator {
//     @MeasureTime()
//     sum(a: number, b: number): number {
//         return a + b;
//     }
//     @MeasureTime()
//     minus(a: number, b: number): number {
//         return a - b;
//     }
// }
// function MeasureTime(): MethodDecorator {
//     return <Value = unknown>(
//         target: Object,
//         propertyKey: string | symbol,
//         descriptor: TypedPropertyDescriptor<Value>
//     ): TypedPropertyDescriptor<Value> | void => {
//         const originalMethod = descriptor.value as (...args: unknown[]) => unknown;
//         descriptor.value = function(...args: unknown[]): unknown {
//             console.time(propertyKey.toString());
//             const result = originalMethod.apply(this, args);
//             console.timeEnd(propertyKey.toString());
//             return result;
//         } as Value;
//     };
// }
// ---------------------------------------------------------------------------------------------------------
// import "reflect-metadata"
// type Constructor = new (...args: any) => any;
// type ServiceMetadata = {
//     isSingleton: boolean;
// }
// @Service({
//     isSingleton: true,
// })
// class UserService {}
// function Service(metadata: ServiceMetadata): ClassDecorator {
//     return <TFunction extends Function>(ctor: TFunction): TFunction | void => {
//         Reflect.defineMetadata('service', metadata, ctor);
//     }
// }
// const instanceStore = new Map();
// function getInstance<ServiceConstructor extends Constructor>(
//     Service: ServiceConstructor
// ): InstanceType<ServiceConstructor> {
//     const metadata: ServiceMetadata = Reflect.getMetadata('service', Service);
//     if (!metadata?.isSingleton) {
//         return new Service();
//     }
//     // if (!metadata.isSingleton) {
//     //     return new Service();
//     // }
//     if (!instanceStore.get(Service)) {
//         instanceStore.set(Service, new Service());
//     }
//     return instanceStore.get(Service);
// }
// getInstance(UserService);
// getInstance(UserService);
// getInstance(UserService);
// getInstance(UserService);
// getInstance(UserService);
// getInstance(UserService);
// getInstance(UserService);
