import type { Equal, Expect } from '../../utils'

{
    //     In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

    // For example:

    // type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

    type Flatten<T extends any[], R extends any[] = []> =
        T extends [infer F, ...infer Rest]
        ? F extends any[]
        ? Flatten<[...F, ...Rest], R>
        : Flatten<[...Rest], [...R, F]>
        : R;

    type cases = [
        Expect<Equal<Flatten<[]>, []>>,
        Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
        Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
        Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
        Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
    ]
}
