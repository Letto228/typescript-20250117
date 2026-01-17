/**
 * const Movie = {
 *      title: 'string',
 *      director: 'string',
 *      awards: [],
 * }
 * 
 * const Keys = Object.keys(Movie);
 * 
 * const MovieCopy = Keys.reduce(
 *      (MovieCopy, Key) => ({...MovieCopy, [Key]: Movie[Key]}),
 *      {},
 * )
 */

// type Movie = {
//     readonly title: string;
//     director: string;
//     awards?: string[];
// }

// type MovieKeys = keyof Movie; // 'title' | 'director' | 'awards'
// type MovieValues = Movie[MovieKeys]; // Movie['title'] | Movie['director'] | Movie['awards']

// type MovieCopy = {
//     [Key in keyof Movie]: Movie[Key];
// };

// --------------------------------------------------------------------------------

// type Size = 's' | 'm' | 'l';

// type SizeMap = {
//     [CurrentSize in Size]: string;
// }

// --------------------------------------------------------------------------------

// type MovieWithoutTitle = {
//     [Key in (keyof Movie & 'director' | 'awards')]: Movie[Key];
// };

// --------------------------------------------------------------------------------

// type MapedProperty = {
//     director: 'author',
//     title: 'title',
//     awards: 'awards',
// }

// type MovieTest = {
//     [Key in (keyof Movie) as MapedProperty[Key]]: Movie[Key];
// };

// --------------------------------------------------------------------------------

// type Movie = {
//     readonly title: string;
//     director: string;
//     awards?: string[];
// }

// type MovieCopy = {
//     [Key in keyof Movie]: Movie[Key];
// };

// type OptioanlMovie = {
//     [Key in keyof Movie]?: Movie[Key];
// };

// type ReadonlyMovie = {
//     readonly [Key in keyof Movie]: Movie[Key];
// };

// type EditableMovie = {
//     -readonly [Key in keyof Movie]: Movie[Key];
// };

// type RequiredMovie = {
//     [Key in keyof Movie]-?: Movie[Key];
// };

// --------------------------------------------------------------------------------

// type Movie = {
//     readonly title: string;
//     director: string;
//     awards?: string[];
// }

// type MovieSetters = {
//     [Key in keyof Movie as `set${Capitalize<Key>}`]-?: (newValue: Movie[Key]) => void;
// }

// type MovieGetters = {
//     [Key in keyof Movie as `get${Capitalize<Key>}`]-?: () => Movie[Key];
// }

// type CompleteMovie = Movie & MovieSetters & MovieGetters;

// class MovieClass implements CompleteMovie {
//     title: string;
//     director: string;
//     awards?: string[] | undefined;
//     setTitle: (newValue: string) => void;
//     setDirector: (newValue: string) => void;
//     setAwards: (newValue: string[] | undefined) => void;
//     getTitle: () => string;
//     getDirector: () => string;
//     getAwards: () => string[] | undefined;

// }

// --------------------------------------------------------------------------------

// type MyStages = 'play' | 'pause' | 'end';

// type StageSwitchers = {
//     [Stage in MyStages as `switchTo${Capitalize<Stage>}`]: () => Stage;
// }

// function createStageMachine(): StageSwitchers & {currentStage: MyStages} {
//     return {
//         currentStage: 'pause',
//         switchToPlay: () => 'play',
//         switchToEnd: () => 'end',
//         switchToPause: () => 'pause',
//     }
// }
