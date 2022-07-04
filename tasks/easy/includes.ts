// Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.

// For example

// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

import { Expect, Equal } from "../../utils";

{
    type IsEqual<Y, X> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

    type Includes<T extends any[], U> =
        T extends [infer First, ...infer Rest]
        ? (IsEqual<First, U> extends true ? true : Includes<Rest, U>)
        : false;


    type cases = [
        Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
        Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
        Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
        Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
        Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
        Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
        Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
        Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
        Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
        Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
        Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
        Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
        Expect<Equal<Includes<[1], 1 | 2>, false>>,
        Expect<Equal<Includes<[1 | 2], 1>, false>>,
        Expect<Equal<Includes<[null], undefined>, false>>,
        Expect<Equal<Includes<[undefined], null>, false>>,
    ]
}
