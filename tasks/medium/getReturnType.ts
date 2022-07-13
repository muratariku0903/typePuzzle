// Implement the built-in ReturnType<T> generic without using it.

// For example

// const fn = (v: boolean) => {
//   if (v)
//     return 1
//   else
//     return 2
// }

// type a = MyReturnType<typeof fn> // should be "1 | 2"

import { Expect, Equal } from '../../utils';

{
    type MyReturnType<T extends Function> = T extends (...Args: any[]) => infer R ? R : never;

    type ComplexObject = {
        a: [12, 'foo']
        bar: 'hello'
        prev(): number
    }

    const fn = (v: boolean) => v ? 1 : 2
    const fn1 = (v: boolean, w: any) => v ? 1 : 2

    type cases = [
        Expect<Equal<string, MyReturnType<() => string>>>,
        Expect<Equal<123, MyReturnType<() => 123>>>,
        Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
        Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
        Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
        Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
        Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
    ];
}
