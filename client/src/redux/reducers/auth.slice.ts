// import { AuthState } from '@/interfaces/interface';
// import { createSlice } from '@reduxjs/toolkit';

// const initialState: AuthState = {
//    access: null,
//    refresh: null,
//    isAuthenticated: false,
//    isLoading: true,
//    user: null,
// };

// const authSlice = createSlice({
//    name: 'auth',
//    initialState,
//    reducers: {
//       loginRedux: (state, { payload }) => {
//          state.access = localStorage.getItem('access');
//          state.refresh = localStorage.getItem('refresh');
//          state.isAuthenticated = true;
//          state.isLoading = false;
//          state.user = payload;
//       },
//       logoutRedux: (state) => {
//          localStorage.removeItem('access');
//          localStorage.removeItem('refresh');
//          state.access = null;
//          state.refresh = null;
//          state.isAuthenticated = false;
//          state.isLoading = true;
//          state.user = null;
//       },
//    },
// });

// export default authSlice.reducer;
// export const { loginRedux, logoutRedux } = authSlice.actions;


// auth.slice.ts
import { AuthState } from '@/interfaces/interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
   access: null,
   refresh: null,
   isAuthenticated: false,
   isLoading: true,
   user: null,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      loginRedux: (state, { payload }) => {
         state.access = localStorage.getItem('access');
         state.refresh = localStorage.getItem('refresh');
         state.isAuthenticated = true;
         state.isLoading = false;
         state.user = payload;
      },
      logoutRedux: (state) => {
         localStorage.removeItem('access');
         localStorage.removeItem('refresh');
         state.access = null;
         state.refresh = null;
         state.isAuthenticated = false;
         state.isLoading = true;
         state.user = null;
      },
      // Nueva acción para actualizar user.image
      updateUserImage: (state, action: PayloadAction<string>) => {
         // Verifica si user existe y actualiza la propiedad image
         if (state.user) {
            state.user.image = action.payload;
         }
      },
   },
});

export default authSlice.reducer;
export const { loginRedux, logoutRedux, updateUserImage } = authSlice.actions;
