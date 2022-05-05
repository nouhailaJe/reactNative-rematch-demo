import Account from "./src/store/containers/account";
import store from './src/store/index'
import { InMemoryCache, ApolloProvider, ApolloClient } from '@apollo/client';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListAccount from "./src/views/ListAccount";
import AddAccount from "./src/views/AddAccount";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>

          <Stack.Navigator initialRouteName='Account'>
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="AccountList" component={ListAccount} />
            <Stack.Screen name="AddAccount" component={AddAccount} />


          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </Provider>

  );
}

export default App;