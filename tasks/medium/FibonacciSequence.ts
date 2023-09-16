import { Equal, Expect } from "../../utils";

{
  // fibo 1 1 2 3 5 8 13 21

  type NumToArr<
    T extends number,
    R extends number[] = []
  > = R["length"] extends T ? R : NumToArr<T, [1, ...R]>;
  // type testNumToArrLen = NumToArr<10>

  type Pop<T extends any[]> = T extends [infer head, ...infer Rest] ? Rest : [];
  // type testPop = Pop<[1,1,1]>

  type Add<
    N1 extends number,
    N2 extends number,
    N1R extends number[] = NumToArr<N1>,
    N2R extends number[] = NumToArr<N2>
  > = [...N1R, ...N2R]["length"];
  // type testAdd = Add<2,5>

  type Sub<
    N1 extends number,
    N2 extends number,
    N1R extends number[] = NumToArr<N1>,
    N2R extends number[] = NumToArr<N2>
  > = N2R["length"] extends 0 ? N1R["length"] : Sub<N1, N2, Pop<N1R>, Pop<N2R>>;
  // type testSub = Sub<10, 2>;
  // type testAddSub = Add<Sub<5, 2>, Sub<10, 1>>;

  // type Fibonacci<T extends number> = T extends 1
  //   ? 1
  //   : T extends 2
  //   ? 1
  //   : Add<Fibonacci<Sub<T, 2>>, Fibonacci<Sub<T, 1>>>;
  // type testFibo = Fibonacci<10>;

  type Fibonacci<
    T extends number,
    CurrIdx extends number[] = [1],
    Prev extends number[] = [],
    Curr extends number[] = [1]
  > = CurrIdx["length"] extends T
    ? Curr["length"]
    : Fibonacci<T, [...CurrIdx, 1], Curr, [...Prev, ...Curr]>;

  type cases = [
    Expect<Equal<Fibonacci<1>, 1>>,
    Expect<Equal<Fibonacci<2>, 1>>,
    Expect<Equal<Fibonacci<3>, 2>>,
    Expect<Equal<Fibonacci<8>, 21>>
  ];
}
