import { Expect, Equal, NotEqual } from "../../utils";

{
  type Flip<O extends object, K = keyof O> = K extends keyof O
    ? {
        [key in O[K] & string]: K;
      }
    : never;

  type Flip2<O extends object, K = keyof O> = K extends keyof O ? K : never;

  type test1 = Flip<{ pi: "a" }>;
  type test2 = Flip<{ pi: "a" }>;
  type test3 = Flip<{ pi: 3.14; bool: true }>;

  type cases = [
    Expect<Equal<{ a: "pi" }, Flip<{ pi: "a" }>>>,
    Expect<NotEqual<{ b: "pi" }, Flip<{ pi: "a" }>>>,
    Expect<Equal<{ 3.14: "pi"; true: "bool" }, Flip<{ pi: 3.14; bool: true }>>>,
    Expect<
      Equal<
        { val2: "prop2"; val: "prop" },
        Flip<{ prop: "val"; prop2: "val2" }>
      >
    >
  ];
}
