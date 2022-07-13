// Implement the built-in Omit<T, K> generic without using it.

// Constructs a type by picking all properties from T and then removing K

// For example

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type TodoPreview = MyOmit<Todo, 'description' | 'title'>

// const todo: TodoPreview = {
//   completed: false,
// }

import { Expect, Equal } from '../../utils';

{
    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    type MyExclude<T, U> = T extends U ? never : T;

    type MyPick<T, K extends keyof T> = {
        [key in K]: T[key];
    }

    type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;

    const todo: MyOmit<Todo, 'completed'> = {
        title: 'hello',
        description: 'strong'
    };
}

