import { init } from '@rematch/core'
import account from './modals/millionRecord'

const models = {
  account
};

const store = init({
  models
});

export default store;