import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:[],
    reducers: {
        addUserAction: (state, action) => {
            state.push(action.payload);
        },
        deleteUserAction: (state, action) => {
            state.splice(action.payload.id, 1);
        },
        removeAllUsersAction: (state, action) => {
            return [];
        }
    }
});
export default userSlice;

export const {addUserAction, deleteUserAction, removeAllUsersAction} = userSlice.actions;