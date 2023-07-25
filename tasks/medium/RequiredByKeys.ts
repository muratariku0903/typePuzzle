// Implement a generic RequiredByKeys<T,  K> which takes two type argument T and K.

// K specify the set of properties of T that should set to be required. When K is not provided, it should make all properties required just like the normal Required<T>.

import { Equal, Expect } from "../../utils";

{
  // type IntersectionObj<O extends object> = {
  //   [key in keyof O]: Exclude<O[key], undefined>;
  // };

  // type RequiredByKeys<O extends object, K extends string | never = never> = [
  //   K
  // ] extends [never]
  //   ? Required<O>
  //   : IntersectionObj<
  //       {
  //         [key in keyof O as key extends K ? never : key]: O[key];
  //       } & {
  //         [key in Extract<keyof O, K>]-?: O[key];
  //       }
  //   >;
  // type IntersectionObj<O extends object> = {
  //   [K in keyof O]: O[K];
  // };

  // type RequiredByKeys<
  //   O extends object,
  //   K extends keyof O = keyof O
  // > = IntersectionObj<Required<Pick<O, K>> & Partial<Omit<O, K>>>;

  type RequiredByKeys<O extends object, K extends keyof O = keyof O> = Omit<
    Required<Pick<O, K>> & Partial<Omit<O, K>>,
    never
  >;

  type test = RequiredByKeys<User, "name" | "age">;

  interface User {
    name?: string;
    age?: number;
    address?: string;
  }

  interface UserRequiredName {
    name: string;
    age?: number;
    address?: string;
  }

  interface UserRequiredNameAndAge {
    name: string;
    age: number;
    address?: string;
  }

  type cases = [
    Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
    Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
    Expect<Equal<RequiredByKeys<User>, Required<User>>>
  ];
}
