// Implement PercentageParser. According to the /^(\+|\-)?(\d*)?(\%)?$/ regularity to match T and get three matches.

// The structure should be: [plus or minus, number, unit] If it is not captured, the default is an empty string.
import { Expect, Equal } from '../../utils'

{
  type PlusOrMinus = '+' | '-'
  type Number = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  type Unit = '%'

  type PercentageParser<S extends string, P extends string = '', N extends string = '', U extends string = ''> =
    S extends ''
    ? [P, N, U]
    : S extends `${infer F}${infer Rest}`
    ? F extends PlusOrMinus
    ? PercentageParser<Rest, F, N, U>
    : F extends Number
    ? PercentageParser<Rest, P, `${N}${F}`, U>
    : F extends Unit
    ? PercentageParser<Rest, P, N, F>
    : never
    : never

  type Test = PercentageParser<'-100%'>

  type Case0 = ['', '', '']
  type Case1 = ['+', '', '']
  type Case2 = ['+', '1', '']
  type Case3 = ['+', '100', '']
  type Case4 = ['+', '100', '%']
  type Case5 = ['', '100', '%']
  type Case6 = ['-', '100', '%']
  type Case7 = ['-', '100', '']
  type Case8 = ['-', '1', '']
  type Case9 = ['', '', '%']
  type Case10 = ['', '1', '']
  type Case11 = ['', '100', '']

  type cases = [
    Expect<Equal<PercentageParser<''>, Case0>>,
    Expect<Equal<PercentageParser<'+'>, Case1>>,
    Expect<Equal<PercentageParser<'+1'>, Case2>>,
    Expect<Equal<PercentageParser<'+100'>, Case3>>,
    Expect<Equal<PercentageParser<'+100%'>, Case4>>,
    Expect<Equal<PercentageParser<'100%'>, Case5>>,
    Expect<Equal<PercentageParser<'-100%'>, Case6>>,
    Expect<Equal<PercentageParser<'-100'>, Case7>>,
    Expect<Equal<PercentageParser<'-1'>, Case8>>,
    Expect<Equal<PercentageParser<'%'>, Case9>>,
    Expect<Equal<PercentageParser<'1'>, Case10>>,
    Expect<Equal<PercentageParser<'100'>, Case11>>,
  ]
}
