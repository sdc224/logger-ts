import { greeter } from '../src/main';

describe('greeter function', () => {
  const name = 'John';

  const p: string = greeter(name);
  const hello = p;

  // Assert greeter result
  it('greets a user with `Hello, {name}` message', () => {
    expect(hello).toBe(`Hello, ${name}`);
  });
});
