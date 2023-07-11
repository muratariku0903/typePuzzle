// Given a number (always positive) as a type. Your type should return the number decreased by one.

import { Equal, Expect } from '../../utils'

{
  // 配列の長さを使って計算するらしい。
  // 負の数とかで場合分けした方がいいかもしれない
  // type MinusOne<T extends number, R extends string[] = []> = `${T}` extends ;

  // type cases = [
  //   Expect<Equal<MinusOne<1>, 0>>,
  //   Expect<Equal<MinusOne<55>, 54>>,
  //   Expect<Equal<MinusOne<3>, 2>>,
  //   Expect<Equal<MinusOne<100>, 99>>,
  //   Expect<Equal<MinusOne<1101>, 1100>>,
  //   Expect<Equal<MinusOne<0>, -1>>,
  //   Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
  // ]
}
