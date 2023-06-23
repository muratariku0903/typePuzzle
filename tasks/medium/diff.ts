import type { Expect, Equal } from '../../utils';

{
    // キーがどちらのオブジェクトにもないものを集めたオブジェクトを返す
    // type Diff<F extends object, S extends object> = {
    //     [K in keyof F & keyof S]:
    //     K extends keyof F ?
    //     unknown extends S[keyof S]
    //     ? F[K]
    //     : never
    //     : never;
    //     // [K in keyof F | keyof S]: K extends keyof F ? true : false;
    //     // [K in keyof F | keyof S]: K extends keyof F & never extends  S[K]?F[K]: S[K];
    // };

    // type Tmp = keyof (Foo | Bar);

    type Diff<F extends object, S extends object> = Omit<F & S, keyof (F | S)>;

    type Foo = {
        name: string
        age: string
    }
    type Bar = {
        name: string
        age: string
        gender: number
    }
    type Coo = {
        name: string
        gender: number
    }

    type tmp = Diff<Foo, Bar>;

    type cases = [
        Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
        Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
        Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
        Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
    ]
}
