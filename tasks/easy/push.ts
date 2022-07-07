// Implement the generic version of Array.push

// For example

// type Result = Push<[1, 2], '3'> // [1, 2, '3']

import { Expect, Equal } from '../../utils';

{
    type Push<T extends any[], U> = [...T, U];
    type Unshift<T extends any[], U> = [U, ...T]

    const nums: Push<[1, 2], 3> = [1, 2, 3]
}
