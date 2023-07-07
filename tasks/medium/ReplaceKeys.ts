// Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments.

import { Expect, Equal } from '../../utils';

{
  // type ReplaceKeys<O extends object, K extends string, R extends object> = O extends O ? { [key in keyof O]: key extends K ? key extends keyof R ? R[key] : never : O[key] } | ReplaceKeys<Exclude<O, O>, K, R> : never;

  type ReplaceKeys<O extends object, K extends string, RO extends object> = {
    [key in keyof O]: key extends K ? key extends keyof RO ? RO[key] : never : O[key];
  };

  type NodeA = {
    type: 'A'
    name: string
    flag: number
  }

  type NodeB = {
    type: 'B'
    id: number
    flag: number
  }

  type NodeC = {
    type: 'C'
    name: string
    flag: number
  }

  type ReplacedNodeA = {
    type: 'A'
    name: number
    flag: string
  }

  type ReplacedNodeB = {
    type: 'B'
    id: number
    flag: string
  }

  type ReplacedNodeC = {
    type: 'C'
    name: number
    flag: string
  }

  type NoNameNodeA = {
    type: 'A'
    flag: number
    name: never
  }

  type NoNameNodeC = {
    type: 'C'
    flag: number
    name: never
  }

  type Nodes = NodeA | NodeB | NodeC
  type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC
  type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB

  // type ReadOnlyNodes<O extends object> = { readonly [key in keyof O]: O[key] };

  // type test = ReadOnlyNodes<Nodes>;

  // const test: test = { type: 'A', name: 'murata', flag: 1 };

  // test.name = 'tamura';

  type cases = [
    Expect<Equal<ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>, ReplacedNodes>>,
    Expect<Equal<ReplaceKeys<Nodes, 'name', { aa: number }>, NodesNoName>>,]
}
