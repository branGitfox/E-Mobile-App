import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home/Home';
import Sell from './components/sell/Sell';
import Loader from './components/loader/Loader';
import SignUp from './components/signUp/SignUp';
const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator>
       <Stack.Screen name='loader' options={{headerShown:false}} component={Loader} />
       <Stack.Screen name='signUp' options={{headerShown:false}} component={SignUp} />
      <Stack.Screen name='home' options={{headerShown:false}} component={Home} />
      <Stack.Screen name='vendre' options={{headerShown:false}} component={Sell} />
      {/* <Stack.Screen name="vente" component={DetailScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
    // <View>
    //     <View>
    //         <Header />
    //         <Search />
    //         <Filtre />
    //         <Product />
    //         <Footer />
    //     </View>
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//       width:'100%',
//       display:'flex',
//       justifyContent:'center',
//       height:50,
//       backgroundColor:'whitesmoke',
//       position:'absolute',
//       top:40
//   },
// });
