// Implement the String to Union type. Type take string argument. The output should be a union of input letters

// For example

// type Test = '123';
// type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"


{
    type Test = '123';

    type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never;

    type tmp = StringToUnion<Test>;
}
