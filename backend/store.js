// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slice";
// import thunk from "redux-thunk";
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import { persistStore, persistReducer } from "redux-persist";

// // const persistConfig = {
// //   key: "root",
// //   storage: AsyncStorage,
// //   whitelist: ["accessToken", "isAuthorized"],
// // };
// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(persistConfig, authReducer),
//   },
//   middleware: [thunk],
// });

// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
