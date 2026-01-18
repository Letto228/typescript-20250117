import classes from 'test.module.css';
import {calculate} from 'external-library';

try {
    throw '';
    throw {};
    throw 123;
    throw null;
    throw new Error('');
} catch (error: unknown) {
    if (error instanceof Error) {
        console.log(error.message);
    }

    if (typeof error === 'string') {
        console.log(error);
    }
}

calculate(1,2);
window.palyVideo();


// type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never
// type Expand<T> = { [K in keyof T]: T[K] }

// type User = { name: string };type Admin = { role: string };
// type SuperUser = User & Admin;

// // Without Expand - IDE shows: "User & Admin"
// const user1: SuperUser = { name: "John", role: "admin" };

// // With Expand - IDE shows: "{ name: string; role: string; }"
// const user2: Expand<SuperUser> = { name: "John", role: "admin" };

// type MatcherParam<M> = M extends (param : string) => param is infer U
//     ? U extends string
//         ? U
//         : string
//     : string;
