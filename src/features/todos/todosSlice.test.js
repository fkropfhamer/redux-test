import reducer, { add, removeByIndex } from "../todos/todosSlice";

describe('counter reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({value: [{name: 'test'}]})
    });

    it('should handle add', () => {
        expect(reducer({value: []}, add({name: 'test'}))).toEqual({value: [{name: 'test'}]})
    });

    it('should handle removeByIndex', () => {
        expect(reducer({value: [{name: 'todo1'}, {name: 'todo2'}, {name: "todo3"}]}, removeByIndex(1))).toEqual({value: [{name: 'todo1'}, {name: "todo3"}]})
    })
});
