import {createSlice} from "@reduxjs/toolkit"

// const initialState = {
//     user: localStorage.getItem("userInfo")
//     ? JSON.parse(localStorage.getItem("userInfo"))
//     : null,

//     isSidebarOpen: false,
// }

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {name: "Test User", id: 1}, // 👈 Тестовый пользователь по умолчанию

  isSidebarOpen: false,
};

const authSlice = createSlice ({
    name: "auth",
    initialState,
reducers :{
    setCredentials: (state, action) => {
        state.user = action.payload
        localStorage.setItem("userInfo", JSON.stringify(action.payload))
    },
    logout: (state, action) => {
        state.user = null
        localStorage.removeItem("userInfo")
    },
    setOpenSidebar: (state, action) => {
        state.isSidebarOpen = action.payload
    }
}
})

export const {setCredentials, logout, setOpenSidebar} = authSlice.actions

export default authSlice.reducer