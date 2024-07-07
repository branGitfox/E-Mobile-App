import React , {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Image} from 'react-native';
// import DatePicker from 'react-native-datepicker-ios'; 
import DateTimePicker from '@react-native-community/datetimepicker';

import xxx from '../../assets/xxx.png'
const SignUp = ({navigation}) => {

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

    const goto = () => {
        navigation.navigate('signIn')
    }

    return (
        <View style={styles.container}>
            <Image source={xxx} style={styles.image}/>
            <Text style={styles.title} >S'inscrire</Text>
            <View style={styles.container2}>
            <TextInput
        style={styles.input}
        placeholder="Nom"
       
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
      
      />
    <Text style={styles.dateText}>Date de Naissance</Text>
        <DateTimePicker
          testID="dateTimePicker"
         value={date}
          mode="date"
          display="default"
          style={styles.date}

          
        />
      
      <TextInput
        style={styles.input}
        placeholder="Email"

       
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmer le mot de passe"
      
        secureTextEntry={true}
      />
      <TouchableOpacity style={[styles.button, styles.buyNowButton]}>
            <Text style={styles.buttonText}>Soumettre</Text>
          </TouchableOpacity>
      <Text onPress={goto} style={styles.signInText}>
        Déjà un compte ? Se connecter
      </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF', 
        width:'100%',
        position:'absolute',
        top:300
      },
    container:{

        backgroundColor:'#fff',
        width:'100%',
        height:1000,
        padding:30,
        flex:1,
        alignItems:'center'
    },

    image:{
        width:200,
        height:200
    },

    title:{
        fontSize:40,
        fontWeight:'bold',
        color:'green'
    },

    input: {
        height: 50,
        borderColor: 'green',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: 'whitesmoke', 
        borderRadius:30
      },

      signInText: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
     
      },

      button: {
        backgroundColor: 'green', 
        borderRadius: 30,
        paddingVertical: 20,
        marginBottom: 10,
      },
      buttonText:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
      },
      date:{
        position:'relative',
        top:-10,
        marginVertical:10,
        width:'90%'
      },
      dateText:{
        position:'relative',
        top:30,
        fontWeight:'bold',
        left:10
      }

  
})

export default SignUp;
