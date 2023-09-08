import helloWorld from '../hello-world';

describe('Hello World', () => {
  it('says Hello World', () => {
    expect(helloWorld()).toEqual('Hello World');
  });
});
