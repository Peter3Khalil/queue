const Queue = require("./Queue");
let queue = new Queue();
describe("Test Queue methods in case : Queue is empty", () => {
  it("isEmpty should return true", () => {
    expect(queue.isEmpty()).toBeTruthy();
  });

  it("peek() should return null", () => {
    expect(queue.peek()).toBe(null);
  });

  it("dequeue() should return null", () => {
    expect(queue.dequeue()).toBe(null);
  });
  it("size() should return Zero", () => {
    expect(queue.size()).toBe(0);
  });
});
describe("Test Queue methods in case : Queue is not empty", () => {
  it("enqueue() should insert element in the last", () => {
    queue.enqueue(5);
    queue.enqueue(8);
    queue.enqueue(10);
    expect(queue.peek()).toBe(5);
  });
  it("isEmpty() should be false", () => {
    expect(queue.isEmpty()).toBeFalsy();
  });
  it("peek() should return first element(5)", () => {
    expect(queue.peek()).toBe(5);
  });
  it('size() should return 3', () => {
    expect(queue.size()).toBe(3);
  });
  
  it('dequeue() should return first element in queue(5)', () => {
    expect(queue.dequeue()).toBe(5);
  });
  
});
