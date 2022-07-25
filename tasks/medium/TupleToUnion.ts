// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

// For example

// type Arr = ['1', '2', '3']

// type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

import { Expect, Equal } from '../../utils';

{
    type Arr = ['a', 'b', 'c'];

    // type TupleToUnion<T> = T extends (infer U)[] ? U : never;
    // type TupleToUnion<T extends any[]> = T[number];
    type TupleToUnion<T extends any[]> = T extends [infer first, ...infer rest] ? first | TupleToUnion<rest> : never;

    const test: TupleToUnion<Arr> = 'a';

}
