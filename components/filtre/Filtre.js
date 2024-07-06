import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

;

const Filtre = () => {
    return (
        <View style={styles.filtersContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={[styles.filterButtonText, { color: 'white' }]}>Vetements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Chaussures</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Informatiques</Text>
        </TouchableOpacity>
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
      marginHorizontal: 20,
      marginTop: 10,
    },
 
 
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    filtersContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      position:'absolute',
      top:230,
      padding:10,
      width:'100%'
      
    },
    filterButton: {
      backgroundColor: '#e0e0e0',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginLeft:5
    },
    filterButtonText: {
      fontSize: 14,
      color: 'black',
    },
    activeFilter: {
      backgroundColor: 'green',
    },
  });
export default Filtre;
