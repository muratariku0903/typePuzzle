// Implement the generic Mutable<T> which makes all properties in T mutable (not readonly).

import { Expect, Equal } from "../../utils";

{
  type Mutable<T> = { -readonly [K in keyof T]: T[K] };

  type test1 = Readonly<Todo1>;
  type test2 = Readonly<List>;

  interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
      author: string;
    };
  }

  type List = [1, 2, 3];

  type cases = [
    Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
    Expect<Equal<Mutable<Readonly<List>>, List>>
  ];

  // type errors = [
  //   // @ts-expect-error
  //   Mutable<"string">,
  //   // @ts-expect-error
  //   Mutable<0>
  // ];
}
