// Implement the type version of Object.entries

import { Expect, Equal } from "../../utils";

{
  type ObjectEntries<O extends object, K = keyof O> = K extends keyof O
    ?
        | [K, [Required<O>[K]] extends [never] ? undefined : Required<O>[K]]
        | ObjectEntries<Omit<O, K>>
    : never;

  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }

  type ObjectToArr<O extends object> = { [K in keyof O]: [K, O[K]] }[keyof O];

  // type arr = ObjectToArr<Model>;

  // const arr: arr = ["helo", "helo"];

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
