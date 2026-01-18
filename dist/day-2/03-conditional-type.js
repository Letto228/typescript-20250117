"use strict";
// type IdLabel = {
//     id: number;
// }
// type NameLabel = {
//     name: string;
// }
// type NameOrId<Value extends string | number> = Value extends number
//     ? IdLabel
//     : Value extends string
//         ? NameLabel
//         : never;
// function createLabel<Value extends string | number>(value: Value): NameOrId<Value> {
//     throw new Error('error');
// }
// const idLabel = createLabel(123);
// const nameLabel = createLabel('str');
