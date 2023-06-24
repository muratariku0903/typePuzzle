// Implement permutation type that transforms union types into the array that includes permutations of unions.

{
    type Permutation<T, K = T> =
        [T] extends [never]
        ? []
        : K extends K
        ? [K, ...Permutation<Exclude<T, K>>]
        : never;

    type alpha = 'A' | 'B' | 'C';

    const alphas: Permutation<alpha> = ['A', 'B', 'C'];
}
