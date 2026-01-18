"use strict";
// class Animal {
//     feed(): void {}
// }
// class Movable {
//     move(): void {}
// }
// class Horse {}
// // ------------------------------------------------------------------------------------------------
// type Construnctor = abstract new (...args: any) => any;
// function applyMixins(child: Construnctor, parents: Construnctor[]): void {
//     parents.forEach(parent => {
//         Object.getOwnPropertyNames(parent.prototype).forEach(parentPropertyName => {
//             child.prototype[parentPropertyName] = parent.prototype[parentPropertyName];
//         })
//     })
// }
// // ------------------------------------------------------------------------------------------------
// applyMixins(Horse, [Animal, Movable]);
// interface Horse extends Animal, Movable {}
// const horse = new Horse();
// horse.feed();
// horse.move();
