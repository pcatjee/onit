import React from "react";
import { Text, View } from "react-native";
import Navigation from "./Navigation";
import { AuthProvider } from "./utils/components/AuthContext";
import { store } from "./backend/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    //<AuthProvider>
    <Provider store={store}>
      <Navigation />
    </Provider>
    //</AuthProvider>
  );
};

export default App;
