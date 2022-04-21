import MillionRecord from "./src/store/containers/millionRecord";
import store from './src/store/index'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <MillionRecord />
    </Provider>
  );
}

export default App;