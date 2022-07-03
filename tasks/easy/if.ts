// type A = If<true, 'a', 'b'>  // expected to be 'a'
// type B = If<false, 'a', 'b'> // expected to be 'b'

import { Equal, Expect } from '../../utils';

{
    type If<T extends boolean, K extends any, U extends any> = T extends true ? K : U;

    type A = If<true, 'a', 'b'>  // expected to be 'a'
    type B = If<false, 'a', 'b'> // expected to be 'b'

    type cases = [
        Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
        Expect<Equal<If<false, 'a', 2>, 2>>,
    ];
}
