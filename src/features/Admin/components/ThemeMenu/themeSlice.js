import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'theme-mode-light',
        color: 'theme-color-blue',
    },
    reducers: {
        setThemeMode: (state, action) => {
            state.mode = action.payload;
        },
        setThemeColor: (state, action) => {
            state.color = action.payload;
        },
    },
});

export const { setThemeMode, setThemeColor } = themeSlice.actions;

export default themeSlice.reducer;
