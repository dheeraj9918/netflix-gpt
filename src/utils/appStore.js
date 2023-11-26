import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import moviesSlice from "./moviesSlice";


const appStore = configureStore({
    reducer: {
        user: appSlice,
        movies:moviesSlice,
    }
});

export default appStore;