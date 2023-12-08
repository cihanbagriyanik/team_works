import { combineReducers, legacy_createStore as createStore } from "redux";
import AppRouter from "./router/AppRouter";

import { Provider } from "react-redux";
import basketReducer from "./redux/reducer/basketReducer";

const App = () => {
  const mainReducer = combineReducers({
    basketReducer: basketReducer,
  });

  const store = createStore(mainReducer);

  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
