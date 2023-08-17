import { Expect, Equal } from "../../utils";

{
  type ParseInt<T extends string> = T extends `${infer Digit extends number}`
    ? Digit
    : never;
  type ReverseString<S extends string> = S extends `${infer First}${infer Rest}`
    ? `${ReverseString<Rest>}${First}`
    : "";
  type RemoveLeadingZeros<S extends string> = S extends "0"
    ? S
    : S extends `${"0"}${infer R}`
    ? RemoveLeadingZeros<R>
    : S;
  type InternalMinusOne<S extends string> =
    S extends `${infer Digit extends number}${infer Rest}`
      ? Digit extends 0
        ? `9${InternalMinusOne<Rest>}`
        : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit]}${Rest}`
      : never;
  type MinusOne<T extends number> = ParseInt<
    RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>
  >;

  type FlattenDepth<
    T extends any[],
    DT extends number = 1,
    CNT extends number = DT,
    R extends any[] = []
  > = T extends [infer F, ...infer Rest]
    ? F extends any[]
      ? CNT extends 0
        ? FlattenDepth<Rest, DT, DT, [...R, ...F]>
        : FlattenDepth<[...F, ...Rest], DT, MinusOne<CNT>, R>
      : FlattenDepth<Rest, DT, DT, [...R, F]>
    : R;

  type F = [1, ...[2, [3]]];

  type test1 = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>;
  type test2 = FlattenDepth<[1, [2, [3, [4, [5]]]]], 2>;
  type test3 = FlattenDepth<[1, [2, [3, [4, [5]]]], [6, 7]], 3>;

  type cases = [
    Expect<Equal<FlattenDepth<[]>, []>>,
    Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
    Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
    Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
    Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
    Expect<
      Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
    >
  ];
}
