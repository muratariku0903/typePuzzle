// Implement RemoveIndexSignature<T> , exclude the index signature from object types.

import { Expect, Equal } from '../../utils'

{
  type RemoveIndexSignature<O> = { [K in keyof O as K extends `${infer ConcreteKey}` ? ConcreteKey : never]: O[K] }

  // type Remapped<O extends object> = { [K in keyof O as 'hello']: O[K] }

  // type Tmp = Remapped<Foo>

  // type test = RemoveIndexSignature<Foo>

  type Foo = {
    [key: string]: any
    foo(): void
  }

  type Bar = {
    [key: number]: any
    bar: () => void
    0: string
  }

  type test = RemoveIndexSignature<Bar>

  const foobar = Symbol('foobar')
  type FooBar = {
    [key: symbol]: any
    [foobar](): void
  }

  type Baz = {
    bar(): void
    baz: string
  }

  type cases = [
    Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
    // Expect<Equal<RemoveIndexSignature<Bar>, { bar: () => {}; 0: string }>>, // error
    // Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,　error
    Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
  ]
}
