import reducer, {increment, decrement, incrementByAmount} from './counterSlice';

describe('counter reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({value: 0})
    });

    it('should handle increment', () => {
       expect(reducer({value: 3}, increment)).toEqual({value: 4})
    });

    it('should handle decrement', () => {
        expect(reducer({value: 6}, decrement)).toEqual({value: 5})
    });

    it('should handle incrementByAmount', () => {
        expect(reducer({value: 0}, incrementByAmount(9))).toEqual({value: 9})
    })
});
