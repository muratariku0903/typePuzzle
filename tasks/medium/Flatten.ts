import type { Equal, Expect } from '../../utils'

{
    //     In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

    // For example:

    // type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

    type DeepUnpack<T extends any[] | any> = T extends (infer U)[] ? DeepUnpack<U> : T;

    type Flatten<T extends any[], R extends any[] = []> =
        T extends []
        ? []
        :
        T extends [infer F, infer Rest]
        ? Flatten<[Rest], [...R, DeepUnpack<F>]>
        : [...R, DeepUnpack<T>];

    type tmp = Flatten<[1, 2, [3, 4], [[[5]]]]>;
    type tmp1 = Flatten<[1, 2, 3, 4]>;

    type cases = [
        Expect<Equal<Flatten<[]>, []>>,
        Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
        Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
        Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
        Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
    ]
}
