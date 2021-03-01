import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [{name: 'test'}],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },

        removeByIndex: (state, action) => {
            state.value.splice(action.payload, 1);
        },
    },
});

export const { add, removeByIndex } = todosSlice.actions;


export const selectTodos = state => state.todos.value;

export default todosSlice.reducer;
