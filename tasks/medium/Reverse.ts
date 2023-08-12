import { Expect, Equal } from "../../utils";

{
  type Reverse<T extends any[]> = T extends [infer F, ...infer R]
    ? [...Reverse<R>, F]
    : T;

  type cases = [
    Expect<Equal<Reverse<[]>, []>>,
    Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
    Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
  ];
}
