// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

// For example

// type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'

{
    type Blank = ' ' | '\n' | '\t';

    type Trim<S extends string> =
        S extends
        `${Blank}${infer Rest}` |
        `${infer Rest}${Blank}`
        ? Trim<Rest>
        : S;


    type trimmed = Trim<' hello '>;
}
