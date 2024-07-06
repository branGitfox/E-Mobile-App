
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
const Spinner = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
                setIsLoading(false)
        }, 5000)
    }, [])

    if(isLoading){
        return (
            <View style={styles.container}>
            <ActivityIndicator size="large" color="grey" />
          </View>
        )
    }
    return navigation.navigate('home')
   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position:'absolute',
      top:560
    },
  });
export default Spinner;
