// Implement a generic Last<T> that takes an Array T and returns its last element.

// For example

// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]

// type tail1 = Last<arr1> // expected to be 'c'
// type tail2 = Last<arr2> // expected to be 1


{
    type Last<T extends any[]> = T extends [...any[], infer R] ? R : never;

    type arr1 = ['a', 'b', 'c'];
    type arr2 = [3, 2, 1];

    type tail1 = Last<arr1>;
    type tail2 = Last<arr2>;
}
