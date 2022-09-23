// Implement Replace<S, From, To> which replace the string From with To once in the given string S

// For example

// type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

{
    type Replace<S extends string, From extends string, To extends string> =
        From extends ''
        ? S
        : S extends `${infer L}${From}${infer R}`
        ? `${L}${To}${R}`
        : S;

    type replaced = Replace<'types are fun!', 'fun', 'awesome'>;

    const tmp: replaced = 'types are awesome!';
}
