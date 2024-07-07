
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = ({navigation}) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem}>
        <FontAwesome name="home" size={35} color="green" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <FontAwesome onPress={() => navigation.navigate('vendre')} name="dollar" size={35} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <FontAwesome name="user" size={35} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <FontAwesome name="cog" size={35} color="black"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 30,
    paddingHorizontal: 20,
    position: 'absolute',
    top:800 ,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default Footer;