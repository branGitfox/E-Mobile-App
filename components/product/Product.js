import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import img1 from '../../assets/img1.avif'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
const Product = () => {
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
                setIsLoading(false)
        }, 5000)
    }, [])

    if(isLoading){
        return (
            <View style={styles.container}>
            <ActivityIndicator size="large" color="green" />
          </View>
        )
    }
    return (
        <ScrollView persistentScrollbar={true} style={styles.cardContainer}>
      <Image
        source={img1} 
        style={styles.productImage}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>Nom du Produit</Text>
        <Text style={styles.productPrice}>MGA 10.000</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
            <Text style={styles.buttonText}><FontAwesome name='plus'/> Panier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
            <Text style={styles.buttonText}><FontAwesome name='check'/> Acheter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={img3} 
        style={styles.productImage}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>Nom du Produit</Text>
        <Text style={styles.productPrice}>MGA 10.000</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
            <Text style={styles.buttonText}><FontAwesome name='plus'/> Panier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
            <Text style={styles.buttonText}><FontAwesome name='check'/> Acheter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image
        source={img2} 
        style={styles.productImage}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>Nom du Produit</Text>
        <Text style={styles.productPrice}>MGA 10.000</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.addToCartButton]}>
            <Text style={styles.buttonText}><FontAwesome name='plus'/> Panier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
            <Text style={styles.buttonText}><FontAwesome name='check'/> Acheter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      margin: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      position:'absolute',
      top:300,
      left:20,
      height:480
      
      
    },
    productImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    productDetails: {
      padding: 10,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    productPrice: {
      fontSize: 16,
      color: 'green',
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      width: '45%',
    },
    addToCartButton: {
      backgroundColor: 'blueviolet',
    },
    buyNowButton: {
      backgroundColor: 'green',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position:'absolute',
      top:500,
      width:'100%'
    },
  });

export default Product;
