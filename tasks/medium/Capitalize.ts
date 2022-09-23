// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

// For example

// type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

import { Equal, Expect } from '../../utils/index.d';

{
    type Capitalize<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : S;


    type Cases = [
        Expect<Equal<Capitalize<'hello'>, 'Hello'>>,
        Expect<Equal<Capitalize<''>, ''>>,
    ];
}
