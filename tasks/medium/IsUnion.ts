// Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.

import { Expect, Equal } from '../../utils';

{
  type IsUnionImpl<T, C extends T = T> = (T extends T ? C extends T ? true : unknown : never) extends true ? false : true;
  type IsUnion<T> = IsUnionImpl<T>;

  type case1 = IsUnion<string | number>;
  // type phase1 = IsUnionImpl<string | number, string | number>;
  // type phase2 =
  //   (
  //     string | number extends string | number ? string | number extends string | number ? true : unknown : never
  //   ) extends true ? false : true;
  // type phase3 =
  //   (
  //     (string extends string | number ? string | number extends string ? true : unknown : never)
  //     |
  //     (number extends string | number ? string | number extends number ? true : unknown : never)
  //   ) extends true ? false : true;
  // type phase4 =
  //   (
  //     (string | number extends string ? true : unknown)
  //     |
  //     (string | number extends number ? true : unknown)
  //   ) extends true ? false : true;
  // type phase5 =
  //   (
  //     (
  //       (string extends string ? true : unknown) |
  //       (number extends string ? true : unknown)
  //     )
  //     |
  //     (
  //       (string extends number ? true : unknown) |
  //       (number extends number ? true : unknown)
  //     )
  //   ) extends true ? false : true;
  // type phase6 =
  //   (
  //     (true | unknown)
  //     |
  //     (unknown | true)
  //   ) extends true ? false : true;
  // type phase7 = (true | unknown) extends true ? false : true;
  // type phase8 = true;

  // type case2 = IsUnion<[string | number]>
  // type phase1 = IsUnionImpl<[string | number], [string | number]>;
  // type phase2 =
  //   (
  //     [string | number] extends [string | number] ? [string | number] extends [string | number] ? true : unknown : never
  //   ) extends true ? false : true;
  // type phase3 =
  //   (
  //     [string | number] extends [string | number] ? true : unknown
  //   ) extends true ? false : true;
  // type phase4 = (true) extends true ? false : true;

  // type case3 = IsUnion<string | 'a'>
  // type phase1 = IsUnionImpl<string | 'a', string | 'a'>;
  // type phase2 =
  //   (
  //     string | 'a' extends string | 'a' ? string | 'a' extends string | 'a' ? true : unknown : never
  //   ) extends true ? false : true;
  // type phase3 =
  //   (
  //     string | 'a' extends string | 'a' ? true : unknown
  //   ) extends true ? false : true;
  // type phase4 = (true) extends true ? false : true;


  type cases = [
    Expect<Equal<IsUnion<string>, false>>,
    Expect<Equal<IsUnion<string | number>, true>>,
    Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
    Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
    Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
    Expect<Equal<IsUnion<{ a: string | number }>, false>>,
    Expect<Equal<IsUnion<[string | number]>, false>>,
    // Cases where T resolves to a non-union type.
    Expect<Equal<IsUnion<string | never>, false>>,
    Expect<Equal<IsUnion<string | unknown>, false>>,
    Expect<Equal<IsUnion<string | any>, false>>,
    Expect<Equal<IsUnion<string | 'a'>, false>>,
    Expect<Equal<IsUnion<never>, false>>,
  ]
}
