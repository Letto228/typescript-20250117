// type Size = 's' | 'm' | 'l';

// function calculateButtonSize(size: Size) {}

// let size: Size = 'm';

// type Movie = {
//     title: string;
//     director: string;
//     awards?: string[];
// }

// type Movie = {
//     name: string;
// }

// type Film = {
//     title: string;
//     director: string;
//     awards?: string[];
//     duration: number;
// }

// type TvSeries = {
//     title: string;
//     director: string;
//     awards?: string[];
//     seasonCount: number;
// }

// type Played = {
//     // title: number;
//     // duration: number | string
//     paly(): void;
// }

// type Film = Movie & Played & {
//     duration: number;
// }

// type TvSeries = Movie & Played & {
//     seasonCount: number;
// }

// const film: Film = {
//     title: '1',
//     director: '12',
//     duration: 123,
//     paly() {
        
//     },
// }
// const newFilm: Film = {
//     title: '3',
//     director: '32',
//     duration: 321,
//     awards: ['Global'],
//     paly() {
        
//     },
// }

// const serials: TvSeries = {
//     title: 'serials',
//     director: 'direcrtor',
//     seasonCount: 3,
//     paly() {
        
//     },
// }

interface Movie {
    name: string;
}
