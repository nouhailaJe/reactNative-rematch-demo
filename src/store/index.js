import { init } from '@rematch/core'
import account from './modals/account'
import persistPlugin from "@rematch/persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: "root",
  storage:AsyncStorage,
};

const models = {
  account
};

const store = init({
  models,
  plugins: [persistPlugin(persistConfig)],
});


export default store;