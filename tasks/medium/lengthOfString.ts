// Compute the length of a string literal, which behaves like String#length.

import type { Equal, Expect } from '../../utils'

{
    type StringToTuple<S extends string> =
        S extends `${infer First}${infer Rest}`
        ? [First, ...StringToTuple<Rest>]
        : [];
    type LengthOfString<S extends string> = StringToTuple<S>['length'];

    type LengthOfString2<S extends string, T extends string[] = []> =
        S extends `${infer First}${infer Rest}`
        ? LengthOfString2<Rest, [...T, S]>
        : T['length'];

    type Test = LengthOfString<'hello'>;

    type cases = [
        Expect<Equal<LengthOfString<''>, 0>>,
        Expect<Equal<LengthOfString<'kumiko'>, 6>>,
        Expect<Equal<LengthOfString<'reina'>, 5>>,
        Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
    ];
}
