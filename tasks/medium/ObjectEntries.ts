// Implement the type version of Object.entries

import { Expect, Equal } from "../../utils";

{
  type ObjectEntries<O extends object, K = keyof O> = K extends keyof O
    ?
        | [K, O[K] extends infer T | undefined ? T : O[K]]
        | ObjectEntries<Omit<O, K>>
    : never;

  type test = ObjectEntries<Partial<Model>>;

  type partial = Partial<Model>;

  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }

  type ModelEntries =
    | ["name", string]
    | ["age", number]
    | ["locations", string[] | null];

  type cases = [
    Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
    Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
    Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
    Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>,
    Expect<
      Equal<
        ObjectEntries<{ key: string | undefined }>,
        ["key", string | undefined]
      >
    >
  ];
}
