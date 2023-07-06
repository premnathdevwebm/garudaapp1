import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import { USER_DATA } from '../../../utils/asyncStorageConstants';

const userInitialState: any = {
  isLoader: false,
  data: {},
};

export const userReducer = createSlice({
  name: 'user_data',
  initialState: userInitialState,
  reducers: {
    logIn: (state, action) => {
      AsyncStorage.setItem(USER_DATA, JSON.stringify({...action.payload}));
      state.isLoader = false;
      state.data = action.payload;
    },
    logOut: (state, action) => {
      AsyncStorage.removeItem(USER_DATA);
      state.isLoader = false;
      state.data = action.payload;
    },
  },
});

export const {logIn, logOut} = userReducer.actions;

export const userReducers = userReducer.reducer;
