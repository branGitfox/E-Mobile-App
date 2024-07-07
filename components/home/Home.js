import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Header from '../header/Header';
import Search from '../search/Search';
import Filtre from '../filtre/Filtre';
import Product from '../product/Product';
import Footer from '../footer/Footer';
const Home = ({navigation}) => {
    
    useEffect(() => {
        alert('Vous etes connecter')
    }, [])

    return (
       <View style={styles.container}>
            <Header/>
            <Search/>
            <Filtre/>
            <Product/>
            <Footer navigation={navigation} />
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    }
})

export default Home;
