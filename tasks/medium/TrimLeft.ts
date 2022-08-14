// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

// For example

// type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '


{
    type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer E}` ? TrimLeft<E> : S;
    type trimed = TrimLeft<' hello '>; // type is  'hello  '
}
