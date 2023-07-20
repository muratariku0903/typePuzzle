// Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U

import { Equal, Expect } from "../../utils";

{
  type StartsWith<S extends string, T extends string> = any;

  type cases = [
    Expect<Equal<StartsWith<"abc", "ac">, false>>,
    Expect<Equal<StartsWith<"abc", "ab">, true>>,
    Expect<Equal<StartsWith<"abc", "abc">, true>>,
    Expect<Equal<StartsWith<"abc", "abcd">, false>>,
    Expect<Equal<StartsWith<"abc", "">, true>>,
    Expect<Equal<StartsWith<"abc", " ">, false>>,
    Expect<Equal<StartsWith<"", "">, true>>
  ];
}
