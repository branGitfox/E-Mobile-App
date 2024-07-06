import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Filtre from './components/filtre/Filtre';
import Product from './components/product/Product';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <View>
        <View>
            <Header />
            <Search />
            <Filtre />
            <Product />
            <Footer />
        </View>
      <StatusBar style="auto" />
    </View>
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
