import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userApi from '../../apis/userApi'

export const register = createAsyncThunk(
  'user/register',
  async (payload) => {
    // call api to register
    const data = await userApi.register(payload)
    // save data to local storage
    localStorage.setItem('access token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user))

    return data.user
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState : {
  current: {},
  setting: {}, 
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled] : (state, action) => {
      state.current = action.payload;
    }
  }
}) 

// Action creators are generated for each case reducer function
export const { reducer } = userSlice.actions

export default userSlice.reducer