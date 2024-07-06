import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Rechercher..."
        //   value={searchText}
          onChangeText={null}
          onSubmitEditing={null}
        />
        <TouchableOpacity style={styles.button} onPress={null}>
          <FontAwesome name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      shadowColor:'black',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 20,
      marginHorizontal: 20,
      marginTop: 10,
      position:'absolute',
      top:140
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: 'green',
      marginLeft: 10,
      padding: 10,
      borderRadius: 20,
    },
  });

export default Search;
