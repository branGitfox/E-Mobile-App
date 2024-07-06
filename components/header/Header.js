import { StyleSheet, Text,Image, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import image from '../../assets/xxx.png'

const Header = () => {
    return (
        <View style={styles.header}>
            <View>
                <Image source={image}  style={styles.image}/>
            </View>
            <View>
                <Text style={styles.title}>MG-Store</Text>
            </View>
            <View>
                <FontAwesome name='shopping-cart' size='28' color='gray'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:'whitesmoke',
        position:'absolute',
        top:34,
        padding:10,
        shadowRadius:10
        
    },

    image:{
        width:75,
        height:75
    },
    title:{
        color:'green',
        fontWeight:'bold',
        fontSize:30
    }
})

export default Header;
