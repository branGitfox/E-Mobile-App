import React from 'react';
import { View, Text, Image , StyleSheet} from 'react-native';
import xxx from '../../assets/xxx.png'
import Spinner from '../spinner/Spinner';

const Loader = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={xxx} style={styles.image}/>    
            <Spinner navigation={navigation}/>       
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:1000,
        backgroundColor:'green', 
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:300,
        height:300
    }
})

export default Loader;
