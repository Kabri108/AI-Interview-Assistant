import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import candidatesReducer from "./slices/candidatesSlice";
import uiReducer from "./slices/uiSlice";

const rootReducer = combineReducers({
  candidates: candidatesReducer,
  ui: uiReducer,
});

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
