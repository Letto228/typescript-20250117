"use strict";
// // ---------------typeof---------------
// // function toUpperCase(a: unknown): string {
// function toUpperCase(a: number | string | boolean): string {
//     return typeof a === 'string' ? a.toUpperCase() : `${a}`.toUpperCase();
// }
// // ---------------Истинность---------------
// type Movie = {duration: number};
// function playMovie(movie?: Movie | null): void {
//     if (movie) {
//         movie.duration;
//     }
// }
// // function playMovie(movie?: Movie | null): number | undefined {
// //     // if (movie) {
// //     //     return movie.duration;
// //     // }
// //     // movie
// //     // return movie?.duration;
// //     // if (!movie) {
// //     //     return undefined;
// //     // }
// //     // return movie.duration
// //     return movie ? movie.duration : undefined
// // }
// // ---------------Равенство---------------
// function calculate(a: number | string, b: number | boolean) {
//     if (a === b) {
//         return a + b;
//     }
// }
// // ---------------in---------------
// type Dog = {
//     bark: () => void;
// }
// type Cat = {
//     meow: () => void;
// }
// type Wolf = {
//     bark: () => void;
//     run: () => void;
// }
// function makeSomeNoise(pet: Dog | Cat | Wolf) {
//     if ('bark' in pet) {
//         pet.bark();
//         if ('run' in pet) {
//             pet.run();
//         }
//     }
//     if ('meow' in pet) {
//         pet.meow();
//     }
// }
// // ---------------instanceof---------------
// function log(date: Date | string) {
//     if (date instanceof Date) {
//         console.log(date.toUTCString());
//     } else {
//         console.log(date);
//     }
//     console.log(date);
// }
// // ---------------discriminated union---------------
// type Film = {
//   typename: "Film";
//   duration: number;
// };
// type TvSeries = {
//   typename: "TvSeries";
//   seasonCount: number;
// };
// type TvShow = {
//   typename: "TvShow";
//   episodeCount: number;
// };
// type Catchup = {
//   typename: "Catchup";
//   endDate: string;
// };
// type Collection = {
//   title: string;
//   items: (Film | TvSeries | TvShow | Catchup)[];
// };
// function play(collection: Collection) {
//   return collection.items.map((item) => {
//     if (item.typename === 'Film') {
//         console.log(item.duration);
//     }
//     if (item.typename === 'TvSeries') {
//         console.log(item.seasonCount);
//     }
//     if (item.typename === 'TvShow') {
//         console.log(item.episodeCount);
//     }
//   });
// }
// // ---------------type predicate---------------
// type FilmP = {
//     title: string;
//     body: number;
// }
// type MyResponse = {
//     status: string;
//     result: unknown;
// }
// function isFilm(entity: unknown): entity is FilmP {
//     const film: FilmP = entity as FilmP;
//     return !!film && typeof film.title === 'string' && typeof film.body === 'number';
// }
// function isString(value: unknown): value is string {
//     return typeof value === 'string';
// }
// function getFilm(): FilmP | undefined {
//     const response: MyResponse = {
//         status: '',
//         result: {
//             title: '',
//             body: 123
//         }
//     };
//     const {result} = response;
//     // const isBool: boolean = isFilm(result);
//     if (isFilm(result)) {
//         return result;
//     }
//     return undefined
// }
// // ---------------satisfies / const---------------
// // Все значения будут иметь тип string | number
// const testA: Record<string, string | number> = {
//   a: 123,
//   b: "",
//   c: 45,
// }
// testA.a;
// testA.fdsaf;
// // Все значения будут иметь тип который в них кладется
// const testB = {
//   a: 123,
//   b: "",
//   c: 45,
// } satisfies Record<string, string | number>;
// // Все значения будут иметь тип литерал который в нем хранится НО нет проверки
// const testC = {
//   a: 123,
//   b: "",
//   c: 45,
// } as const
// // Все значения будут иметь тип литерал который в нем хранится И нет проверка
// const testD = {
//   a: 123,
//   b: "",
//   c: 45,
// } as const satisfies Record<string, string | number>
// testD.a
