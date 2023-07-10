// Drop a specified char from a string.

import { Equal, Expect } from '../../utils'

{
  // type DropChar<S extends string, C extends string, R extends string = ''> =
  //   S extends `${infer F}${infer Rest}`
  //   ? DropChar<Rest, C, `${R}${F extends C ? '' : F}`>
  //   : R;

  type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}` ? DropChar<`${L}${R}`, C> : S;

  type cases = [
    // @ts-expect-error
    Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
    Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
    Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
    Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
    Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
    Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
    Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
  ]
}
