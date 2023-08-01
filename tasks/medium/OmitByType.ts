// From T, pick a set of properties whose type are not assignable to U.

import { Equal, Expect } from "../../utils";

{
  type OmitByType<O extends object, T> = {
    [K in keyof O as O[K] extends T ? never : K]: O[K];
  };

  interface Model {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  }

  type cases = [
    Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
    Expect<
      Equal<
        OmitByType<Model, string>,
        { count: number; isReadonly: boolean; isEnable: boolean }
      >
    >,
    Expect<
      Equal<
        OmitByType<Model, number>,
        { name: string; isReadonly: boolean; isEnable: boolean }
      >
    >
  ];
}
