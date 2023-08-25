// Implement permutation type that transforms union types into the array that includes permutations of unions.

{
  type Permutation<T, K = T> = [T] extends [never]
    ? []
    : K extends K
    ? [K, ...Permutation<Exclude<T, K>>]
    : never;

  // 'a' | 'b' | 'c' extends 'a' | 'b' | 'c'
  //     'a' extends 'a' | 'b' | 'c' -> ['a' ,,,]
  //         'b' | 'c' extends 'b' | 'c'
  //             'b' extends 'b' | 'c' -> ['a','b']
  //                 'c' extends 'c'
  //                     never extends never -> ['a','b','c']
  //             'c' extends 'b' | 'c' -> ['a','c']
  //                 'b' extends 'b'
  //                     never extends never -> ['a','c','b']

  //     'b' extends 'a' | 'b' | 'c' -> ['b',,,]
  //         'a' | 'c' extends 'a' | 'c'
  //             'a' extends 'a' | 'c' -> ['b','a']
  //                 'c' extends 'c'
  //                     never extends never -> ['b','a','c']
  //             'c' extends 'a' | 'c' -> ['b','c']
  //                 'a' extends 'a'
  //                     never extends never -> ['b','c','a']
  //     'c' extends 'a' | 'b' | 'c'
  //       ↑と同じ

  type alpha = "A" | "B" | "C";

  const alphas: Permutation<alpha> = ["A", "B", "C"];
}
