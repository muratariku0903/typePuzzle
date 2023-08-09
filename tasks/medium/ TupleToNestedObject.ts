import { Expect, Equal } from "../../utils";

{
  type TupleToNestedObject<A, T> = A extends [infer F, ...infer Rest]
    ? {
        [K in F & string]: TupleToNestedObject<Rest, T>
      }
    : T;

  type test = TupleToNestedObject<["a", "b"], number>;

  type cases = [
    Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
    Expect<
      Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>
    >,
    Expect<
      Equal<
        TupleToNestedObject<["a", "b", "c"], boolean>,
        { a: { b: { c: boolean } } }
      >
    >,
    Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
  ];
}
