/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in
  
  ### Question
  
  Implement the built-in Parameters<T> generic without using it.
  
  For example:
  
  ```ts
  const foo = (arg1: string, arg2: number): void => {}
  
  type FunctionParamsType = MyParameters<foo> // [arg1: string, arg2: number]
  ```
  
  > View on GitHub: https://tsch.js.org/3312
*/

import { Expect, Equal } from '../../utils';

{
    type MyParameters<T extends Function> = T extends (...Args: infer A) => void ? A : never;

    const tmp = (a: number, b: number): void => { };

    const params: MyParameters<typeof tmp> = [4, 5];
}
