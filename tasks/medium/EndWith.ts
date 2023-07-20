// Implement `EndsWith<T, U>` which takes two exact string types and returns whether `T` ends with `U`

import { Expect, Equal } from "../../utils";

{
  type EndsWith<S extends string, T extends string> = S extends `${infer F}${T}`
    ? true
    : false;

  type cases = [
    Expect<Equal<EndsWith<"abc", "bc">, true>>,
    Expect<Equal<EndsWith<"abc", "abc">, true>>,
    Expect<Equal<EndsWith<"abc", "d">, false>>,
    Expect<Equal<EndsWith<"abc", "ac">, false>>,
    Expect<Equal<EndsWith<"abc", "">, true>>,
    Expect<Equal<EndsWith<"abc", " ">, false>>
  ];
}
