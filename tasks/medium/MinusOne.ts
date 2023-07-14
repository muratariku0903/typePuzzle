// Given a number (always positive) as a type. Your type should return the number decreased by one.

import { Equal, Expect } from '../../utils'

{
  // 配列の長さを使って計算するらしい。
  // 負の数とかで場合分けした方がいいかもしれない
  // type MinusOne<T extends string | number, R extends string[] = []> = `${T}` extends `${infer F}${infer Rest}` ? MinusOne<Rest, [...R, F]> : R;

  type ParseInt<T extends string> = T extends `${infer Digit extends number}` ? Digit : never
  type ReverseString<S extends string> = S extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : ''
  type RemoveLeadingZeros<S extends string> = S extends '0' ? S : S extends `${'0'}${infer R}` ? RemoveLeadingZeros<R> : S
  type InternalMinusOne<
    S extends string
  > = S extends `${infer Digit extends number}${infer Rest}` ?
    Digit extends 0 ?
    `9${InternalMinusOne<Rest>}` :
    `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit]}${Rest}` :
    never
  type MinusOne<T extends number> = ParseInt<RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>>
  type test = MinusOne<9007199254740992>

  type cases = [
    Expect<Equal<MinusOne<1>, 0>>,
    Expect<Equal<MinusOne<55>, 54>>,
    Expect<Equal<MinusOne<3>, 2>>,
    Expect<Equal<MinusOne<100>, 99>>,
    Expect<Equal<MinusOne<1101>, 1100>>,
    // Expect<Equal<MinusOne<0>, -1>>,
    Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
  ]
}
