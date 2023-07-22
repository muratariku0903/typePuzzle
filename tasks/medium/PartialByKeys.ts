// Implement a generic PartialByKeys<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to be optional. When K is not provided, it should make all properties optional just like the normal Partial<T>.

import { Expect, Equal } from "../../utils";

{
  type IntersectionObj<O extends object> = {
    [key in keyof O]: O[key];
  };

  type PartialByKeys<O extends object, K extends string> = IntersectionObj<
    {
      [key in keyof O as key extends K ? never : key]: O[key];
    } & {
      [key in Extract<keyof O, K>]?: O[key];
    }
  >;

  type test = PartialByKeys<User, "name">;

  interface User {
    name: string;
    age: number;
    address: string;
  }

  interface UserPartialName {
    name?: string;
    age: number;
    address: string;
  }

  interface UserPartialNameAndAge {
    name?: string;
    age?: number;
    address: string;
  }

  // type cases = [
  //   Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  //   Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  //   // Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  //   // @ts-expect-error
  //   Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>
  // ];
}
