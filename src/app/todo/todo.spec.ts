import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo(1,'hola',false)).toBeTruthy();
  });
});
