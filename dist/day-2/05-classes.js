"use strict";
// class Film {
//     // title: string | undefined;
//     // title: string;
//     // title: string = '';
//     // private awards: string[] = [''];
//     // protected duration: number = 123;
//     // public title: string = '';
//     constructor(
//         private awards: string[],
//         protected duration: number,
//         public title: string,
//     ) {
//         // this.title = '';
//     }
//     private log() {
//         this.title;
//         this.duration;
//         this.awards;
//     }
// }
// class ChildFilm extends Film {
//     private childLog() {
//         this.title;
//         this.duration;
//         // this.awards;
//     }
// }
// const film = new Film(
//     [''],
//     123,
//     'title',
// );
// film.title
// // this.duration;
// // this.awards;
// ------------------------------------------------------------------------------------------------------------
// abstract class MyNode {
//     x: number = 0;
//     y: number = 0;
//     abstract name: string;
//     public calculateSize(): number {
//         return 100;
//     }
//     abstract paint(): void;
// }
// class StorageNode extends MyNode {
//     name: string = 'StorageNode';
//     paint(): void {
//     }
// }
// class CarNode extends MyNode {
//     name: string = 'CarNode';
//     paint(): void {
//     }
// }
// const storageNode = new StorageNode()
// const myNode = new MyNode()
