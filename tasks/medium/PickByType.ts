// From T, pick a set of properties whose type are assignable to U.

import { Equal, Expect } from "../../utils";

{
  // type PickKeyByType<O extends object, K, T> = K extends keyof O
  //   ? O[K] extends T
  //     ? K
  //     : never
  //   : never;
  // type PickByType<O extends object, T> = {
  //   [K in PickKeyByType<O, keyof O, T>]: O[K];
  // };

  type PickByType<T, U> = {
    [P in keyof T as T[P] extends U ? P : never]: T[P];
  };

  interface Model {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  }

  type cases = [
    Expect<
      Equal<
        PickByType<Model, boolean>,
        { isReadonly: boolean; isEnable: boolean }
      >
    >,
    Expect<Equal<PickByType<Model, string>, { name: string }>>,
    Expect<Equal<PickByType<Model, number>, { count: number }>>
  ];
}
