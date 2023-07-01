// Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.

import { Expect, Equal } from '../../utils';

{
  type Empty = false | 0 | '' | null | undefined | [] | Record<string, never>

  type AnyOf<T extends any[], R = false> =
    T extends [infer F, ...infer Rest]
    ? F extends Empty ? AnyOf<Rest, R> : AnyOf<Rest, true>
    : T extends [Empty] | [] ? R : true;

  // type AnyOf<T extends any[]> = T[number] extends 0 | '' | false | [] | { [key: string]: never }
  //   ? false : true;

  type cases = [
    Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
    Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
    Expect<Equal<AnyOf<[]>, false>>,
  ]
}
