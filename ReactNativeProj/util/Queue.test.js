import {expect, jest, test} from '@jest/globals'
import Queue from './Queue'

let q = null;
beforeEach(function(){
    q = new Queue();
});
test('Empty Queue',function(){
    expect(q.isEmpty()).toBeTruthy();
});
test('Non empty Queue',function(){
    q.enqueue(1);
    expect(q.isEmpty()).toBeFalsy();
    expect(q.size()).toBe(1);
});
test('Enqueue',function(){
    q.enqueue(11);
    q.enqueue(22);
    q.enqueue(33);
    expect(q.size()).toBe(3);
    expect(q.first()).toBe(11);
});
test('Dequeue test',function(){
    q.enqueue(11);
    q.enqueue(22);
    q.enqueue(33);
    let size = q.size();
    expect(q.dequeue()).toBe(11);
    expect(q.size()).toBe(size-1);
});
test('Dequeue Empty elements', function(){
    expect(q.isEmpty()).toBeTruthy();
    expect( () => q.dequeue() ).toThrow();
});
