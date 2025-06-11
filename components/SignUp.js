import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {

  //navigation
  const navigation = useNavigation();

    const [userCred, setUserCred] = useState({
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    const [error, setError] = useState(false);

    const onPress = () => {
        if (
          userCred.userName === '' ||
          userCred.email === '' ||
          userCred.password === '' ||
          userCred.confirmPassword === '' ||
          userCred.password !== userCred.confirmPassword
        ) {
          setError(true);
        } else {
          setError(false);
          // Handle sign up logic here
          console.log("user", userCred.userName);
          console.log("email", userCred.email);
          console.log("password", userCred.password);
        }
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subCont1}>
          <View style={styles.semiCircle}></View>
        </View>

        {/* main content */}
        <View style={styles.subCont2}>
          <Text style={{
            color: "white",
            fontSize: 18,
            textDecorationLine: "underline",
            alignSelf: "center",
            textAlign: "center"
          }}>Sign Up</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              onChangeText={text => setUserCred({ ...userCred, userName: text })}
              style={styles.input}
              value={userCred.userName}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              onChangeText={text => setUserCred({ ...userCred, email: text })}
              style={styles.input}
              value={userCred.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={text => setUserCred({ ...userCred, password: text })}
              style={styles.input}
              value={userCred.password}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={text => setUserCred({ ...userCred, confirmPassword: text })}
              style={styles.input}
              value={userCred.confirmPassword}
            />

            {
              error ? <Text style={styles.error}>
                All fields required and passwords must match
              </Text> : null
            }

            <TouchableOpacity
                          style={styles.button}
                          onPress={onPress}
                          activeOpacity={0.8}
                        >
                          <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>SignUp</Text>
                        </TouchableOpacity>

            {/* if already have an account */}
            <View style={{flexDirection:'row', marginTop:10, justifyContent:"center", width:"100%"}}>
                          <Text style={styles.link}>
                            Already have an account
                            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text style={{textDecorationLine:"underline", color:"#ff00bd"}}> SignIn</Text>
                            </TouchableOpacity>
                          </Text>
                        </View>
          </View>
        </View>

       
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23272A",
    width: "100vw",
  },
  subCont1: {
    flex: 1 / 4,
    width: "100%",
  },
  link:{
    color:"white",
   
    width:"100%",

  },
  subCont2: {
    flex: 2 / 4,
    width: "100%",
  },
  subCont3: {
    flex: 1 / 4,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    
  },
  semiCircle: {
    width: "70%",
    height: "80%",
    backgroundColor: "#461e68",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  semiCircle2: {
    width: "30%",
    height: "70%",
    backgroundColor: "#461e68",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignSelf: "flex-end",
    
  },
  formGroup: {
    alignItems: "flex-start",
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
    
  },
  label: {
    color: "#af8fc9",
    marginBottom: 4,
    marginTop: 12,
    marginLeft: 4,
    fontSize: 16,
  },
  input: {
    width: "100%",
    borderRadius: 20,
    padding: 10,
    color: "#fff",
    backgroundColor: "#3e4751",
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    width:"80%",
    backgroundColor:"#461e68",
    color:"white",
    fontSize:"16px",
    padding:"10px",
    borderRadius:"20px",
    alignSelf:"center",
    textAlign:"center",
    marginTop:"10px"
  },
  error: {
    color: "red",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 8
  },
  link: {
    color: "white",
    marginTop: 10,
    textDecorationLine: "underline",
    width: "100%",
    textAlign: "center"
  }
});