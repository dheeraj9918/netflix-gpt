import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";


const appStore = configureStore({
    reducer: {
        user: appSlice,
        movies:moviesSlice,
        gpt:gptSlice,
        config:configSlice,
    }
});

export default appStore;