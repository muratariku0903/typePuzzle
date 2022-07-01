// Implement the built-in Exclude<T, U>

import { Equal, Expect } from "../../utils";

// Exclude from T those types that are assignable to U


{
    type MyExclude<T, U> = T extends U ? never : T;

    const Ramen: MyExclude<'a' | 'b' | 'c', 'b' | 'a'> = 'c';

    type TestCases = [
        Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
        Expect<Equal<MyExclude<'a' | 'b' | (() => void), Function>, Exclude<'a' | 'b' | (() => void), Function>>>,
    ];
}
