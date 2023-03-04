export const pipe = 
  <T>(...fns: Array<(arg: T) => T>) => 
  (value: T) =>  fns.reduce((acc, fn) => fn(acc), value);
