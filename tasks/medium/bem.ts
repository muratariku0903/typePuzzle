// The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.

// For example, the block component would be represented as btn, element that depends upon the block would be represented as btn__price, modifier that changes the style of the block would be represented as btn--big or btn__price--warning.

// Implement BEM<B, E, M> which generate string union from these three parameters. Where B is a string literal, E and M are string arrays (can be empty).

import { Expect, Equal } from "../../utils";

{
  // イメージで言うと二重ループを再帰関数で実装するってことだよね
  // ある特定の文字に対して文字列くっつける関数を作りたい
  type Attach<
    T extends string,
    A extends any[],
    Bond extends string
  > = A extends [infer F, ...infer Rest]
    ? `${T}${Bond}${F extends string ? F : ""}` | Attach<T, Rest, Bond>
    : never;

  type test1 = Attach<"target", ["apple", "banana", "peach"], "--">;

  type CAttach<
    E extends any[],
    M extends any[],
    Bond extends string
  > = E extends [infer EF, ...infer ER]
    ? `${EF extends string ? Attach<EF, M, Bond> : ""}` | CAttach<ER, M, "--">
    : never;

  type test2 = CAttach<["money", "love"], ["warning", "success"], "--">;

  type BEM<B extends string, E extends any[], M extends any[]> = E extends [
    infer EF,
    ...infer ER
  ]
    ? M extends [infer MF, ...infer MR]
      ? `${B}__${CAttach<E, M, "--">}`
      : Attach<B, E, "__">
    : Attach<B, M, "--">;

  type test3 = BEM<"btn", ["price"], []>;
  type test4 = BEM<"btn", ["price"], ["warning", "success"]>;
  type test5 = BEM<"btn", [], ["small", "medium", "large"]>;

  type cases = [
    Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
    Expect<
      Equal<
        BEM<"btn", ["price"], ["warning", "success"]>,
        "btn__price--warning" | "btn__price--success"
      >
    >,
    Expect<
      Equal<
        BEM<"btn", [], ["small", "medium", "large"]>,
        "btn--small" | "btn--medium" | "btn--large"
      >
    >
  ];
}
