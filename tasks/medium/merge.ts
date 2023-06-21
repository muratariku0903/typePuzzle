// Merge two types into a new type. Keys of the second type overrides keys of the first type.

// For example

// type foo = {
//   name: string;
//   age: string;
// }
// type coo = {
//   age: number;
//   sex: string
// }

// type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}

{
    type Merge<F, S> = {
        [K in keyof F | keyof S]: K extends keyof S
        ? S[K]
        : K extends keyof F
        ? F[K]
        : never;
    }

    type foo = {
        name: string;
        age: string;
    }
    type coo = {
        age: number;
        sex: string
    }

    type Result = Merge<foo, coo>;
}
