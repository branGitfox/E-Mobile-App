import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Product = () => {
    return (
        <ScrollView style={styles.cardContainer}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // URL de l'image du produit
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
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      position:'absolute',
      top:300,
      left:20
      
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
      backgroundColor: 'blue',
    },
    buyNowButton: {
      backgroundColor: 'green',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default Product;
