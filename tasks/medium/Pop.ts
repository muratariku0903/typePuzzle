// TypeScript 4.0 is recommended in this challenge

// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

// For example

// type arr1 = ['a', 'b', 'c', 'd']
// type arr2 = [3, 2, 1]

// type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
// type re2 = Pop<arr2> // expected to be [3, 2]
// Extra: Similarly, can you implement Shift, Push and Unshift as well?


{
    type Pop<T extends any[]> = T extends [...infer U, any] ? U : never;

    type arr1 = ['a', 'b', 'c', 'd']
    type arr2 = [3, 2, 1]

    type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
    type re2 = Pop<arr2> // expected to be [3, 2]F
}
