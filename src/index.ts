interface Foo {
  sum: number;
  avg: number;
}

export function foo(a: number, b: number): Foo {
  return { sum: a + b, avg: (a + b) / 2 };
}
