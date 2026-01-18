"use strict";
// function sum(): number {
//     return 1 + 1;
// }
// function sum(a: number, b: number): number {
//     return a + b;
// }
// ------------------------------------------------------------------------------------------------
// type Movie = {
//     readonly title: string;
//     director: string;
//     awards?: string[];
//     play(): void;
// }
// type Film = Movie & {
//     duration: number;
// }
// type TvSeries = Movie & {
//     seasonCount: number;
// }
// type ResponseStatuses = 'success' | 'error' | 'pending';
// type MyResponse = {
//     isSuccess: boolean;
//     status: ResponseStatuses;
//     result: unknown;
// }
// type FilmResponse = MyResponse & {
//     result: Film;
// }
// type TvSeriesResponse = MyResponse & {
//     result: TvSeries;
// }
// type MyResponse<Result, Status extends ResponseStatuses = ResponseStatuses> = {
//     isSuccess: boolean;
//     status: Status;
//     result: Result;
// }
// type FilmResponse = MyResponse<Film>;
// type TvSeriesResponse = MyResponse<TvSeries>;
// function getFilm(): FilmResponse {
// function getFilm(): MyResponse<Film> {
//    return {
//     isSuccess: true,
//     status: 'error',
//     result: {
//         title: '',
//         director: '',
//         duration: 123,
//     }
//    }
// }
// function getTvSeries(): MyResponse<TvSeries, 'success'> {
//    return {
//     isSuccess: true,
//     status: 'success',
//     result: {
//         title: '',
//         director: '',
//         seasonCount: 3,
//     }
//    }
// }
// ------------------------------------------------------------------------------------------------
// function playMovie<MovieInstance extends Movie = Movie>(movie: MovieInstance): MovieInstance {
//     movie.play();
//     // play movie
//     return movie;
// }
// playMovie<TvSeries>({
//     title: '',
//     director: '',
//     seasonCount: 123,
//     play() {
//     },
// }).seasonCount;
// ------------------------------------------------------------------------------------------------
// function getProperty<Entity extends object>(
//     entity: Entity,
//     key: keyof Entity
// ): Entity[keyof Entity] {
//     return entity[key];
// }
// function getProperty<Entity extends object, Key extends keyof Entity>(
//     entity: Entity,
//     key: Key
// ): Entity[Key] {
//     return entity[key];
// }
// const film: Film = {
//     title: '',
//     director: '',
//     duration: 30,
//     play() {},
// };
// const myFilm = film;
// const propertyValue = getProperty(film, 'awards');
