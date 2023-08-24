// The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.

// For example, the block component would be represented as btn, element that depends upon the block would be represented as btn__price, modifier that changes the style of the block would be represented as btn--big or btn__price--warning.

// Implement BEM<B, E, M> which generate string union from these three parameters. Where B is a string literal, E and M are string arrays (can be empty).

import { Expect, Equal } from "../../utils";

{
  // type BEM<B extends string, E extends string[], M extends any[]> =
  //   E extends [
  //   infer EF,
  //   ...infer ER
  // ]
  //   ? M extends [infer MF, ...infer MR]
  //     ? BEM<B,>
  //     : BEM<`${B}__${EF}`, ER, M>
  //   : M extends [infer MF, ...infer MR]
  //   ? BEM<`${B}--${}`, ER, M>
  //   : B;

  type unionStr = string;
  const tmp: unionStr = "hello" || "good";

  type BEM<B extends string, E extends any[], M extends any[]> = E extends [
    infer F,
    ...infer Rest
  ]
    ? F extends string
      ? BEM<`${B}__${F}`, Rest, E>
      : never
    : B;

  type test1 = BEM<"btn", ["price"], []>;

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
