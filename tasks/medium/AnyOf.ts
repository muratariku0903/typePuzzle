// Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.

import { Expect, Equal } from '../../utils';

{
  // type isEmpty<T> = T extends [false] | [undefined] | [null] | [0] | [''] | [] | {} ? true : false;

  type Empty = false | undefined | null | 0 | '' | [] | {}

  // 早期リターンができない
  type AnyOf<T extends any[], R = false> =
    T extends [infer F, ...infer Rest]
    ? F extends Empty ? AnyOf<Rest, R> : AnyOf<Rest, true>
    : T extends [Empty] | [] ? R : true;

  type test1 = AnyOf<[0, '', false, []]>;
  type test2 = AnyOf<[1]>;

  type tmp = [1] extends [false | undefined | null | 0 | '' | [] | {}] ? true : false;

  type aa = {}

  const aa: aa = [1]

  // type test = AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>;

  // type isEmptyArr<T extends any[]> = T extends [] ? true : false;
  // type isEmptyArr = isEmpty<[1]>;

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
