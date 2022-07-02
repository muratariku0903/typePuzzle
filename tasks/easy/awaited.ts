// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have Promise<ExampleType> how to get ExampleType?
import { Equal, Expect } from "../../utils";

{
    type X = Promise<string>;
    type Y = Promise<{ field: number }>;
    type Z = Promise<Promise<string | number>>;
    type Z1 = Promise<Promise<Promise<string | boolean>>>;

    type MyAwaited<T extends Promise<any>> =
        T extends Promise<infer U>
        ? (U extends Promise<any> ? MyAwaited<U> : U)
        : never;

    type cases = [
        Expect<Equal<MyAwaited<X>, string>>,
        Expect<Equal<MyAwaited<Y>, { field: number }>>,
        Expect<Equal<MyAwaited<Z>, string | number>>,
        Expect<Equal<MyAwaited<Z1>, string | boolean>>,
    ]

    type tmp = MyAwaited<X>;

    const tmp = 'hello' ? 'night' ? 'hello' : 'good' : 'hello';
}
