// type Fn = (a: number, b: string) => number

// type Result = AppendArgument<Fn, boolean> 
// // expected be (a: number, b: string, x: boolean) => number

{
    type Fn = (a: number, b: string) => number;
    type AppendArgument<Function, T> = Function extends (...Args: infer P) => infer R
        ? (...args: [...P, T]) => R
        : never;

    type Result = AppendArgument<Fn, boolean>;
    const fn: Result = (a: number, b: string, c: boolean): number => 1;
}
