import { Expect, Equal } from "../../utils";

{
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const;

  const tree2 = {
    val: 1,
    left: null,
    right: null,
  } as const;

  const tree3 = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  } as const;

  const tree4 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null,
    },
  } as const;

  type Tree = {
    val: number;
    left: Tree | null;
    right: Tree | null;
  };

  // type InorderTraversal<T extends Tree | null> = T extends null
  //   ? []
  //   : T extends Tree
  //   ? [
  //       ...(T["left"] extends Tree ? InorderTraversal<T["left"]> : []),
  //       T["val"],
  //       ...(T["right"] extends Tree ? InorderTraversal<T["right"]> : [])
  //     ]
  //   : never;

  type InorderTraversal<
    T extends Tree | null,
    NT extends Tree = NonNullable<T>
  > = T extends null
    ? []
    : [
        ...InorderTraversal<NT["left"]>,
        NT["val"],
        ...InorderTraversal<NT["right"]>
      ];

  type test1 = InorderTraversal<typeof tree1>;
  type test2 = InorderTraversal<typeof tree2>;

  type cases = [
    Expect<Equal<InorderTraversal<null>, []>>,
    Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
    Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
    Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
    Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>
  ];
}
