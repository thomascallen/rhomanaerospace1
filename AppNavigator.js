import {createStackNavigator, createAppContainer, createAppNavigator} from 'react-navigation';
import Home from './HomePage';
import Login from './LoginPage';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Login : {screen: Login},
});
const App = createAppNavigator(AppNavigator);
export default App;