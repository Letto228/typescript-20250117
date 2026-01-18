// enum Size {
//     s,
//     m = 10,
//     l,
// }

// const size: Size = 11;

// function getButtonSize(size: Size) {}

// getButtonSize(Size.l);
// getButtonSize(10);

// const keys: keyof Size = Size[1]

// ------------------------------------------------------------------------------

// enum Size {
//     s = 'Small',
//     m = 'Medium',
//     l = 'Long',
// }

// const size: Size = Size.m;
// // const size: Size = 'Medium';

// function getButtonSize(size: Size) {}

// getButtonSize(Size.l);
// // getButtonSize('Long');

// // const keys: string = Size['Medium']

// ------------------------------------------------------------------------------

// const enum Size {
//     s = 'Small',
//     m = 'Medium',
//     l = 'Long',
// }

// const size: Size = Size.m;
// // const size: Size = 'Medium';

// function getButtonSize(size: Size) {}

// getButtonSize(Size.l);
// getButtonSize('Long');

// const keys: string = Size['Medium']

// ------------------------------------------------------------------------------

// type Size = 'Small' | 'Medium' | 'Long';

// const sizeMap = {
//     s: 'Small',
//     m: "Medium",
//     l: 'Long',
// } as const satisfies Record<string, Size>;

// // const size: Size = sizeMap.m;
// const size: Size = 'Medium';

// function getButtonSize(size: Size) {}

// getButtonSize(sizeMap.l);
// getButtonSize('Long');

// const keys: keyof typeof sizeMap = 'm';
