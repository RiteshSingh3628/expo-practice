import { View, Text, SafeAreaView, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { use, useState} from 'react'

export default function SignIn() {
    const [userCred, setUserCred] = useState({
      userName: '',
      password: '',
    });
    const [error,setError] = useState(false);

    const onPress = () => {
        console.log("user", userCred.userName);
        console.log("password", userCred.password);
        if(userCred.userName == '' || userCred.password == ''){
          setError(true);
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
            alignSelf: "center",      // centers the Text within its parent View
            textAlign: "center"       // centers the text within the Text component
          }}>Login</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              secureTextEntry={false}
              onChangeText={text => setUserCred({ ...userCred, userName: text })}
              style={styles.input}
              value={userCred.userName}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={text => setUserCred({ ...userCred, password: text })}
              style={styles.input}
              value={userCred.password}
              
            />
              {
              error ? <Text style ={styles.error}>Both fields required</Text> :null
              }
            <TouchableOpacity
              style={styles.button}
              onPress={onPress}
              activeOpacity={0.8}
            >
              <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>Login</Text>
            </TouchableOpacity>

            {/* if does not have an accoutn */}
            <View style={{flexDirection:'row', marginTop:20, justifyContent:"center", width:"100%"}}>
              <Text style={styles.link}>
                Don't have an account? 
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                <Text style={{textDecorationLine:"underline", color:"#ff00bd"}}> SignUp</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.subCont3}>
          <View style={styles.semiCircle2}></View>
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
  subCont2: {
    flex: 2 / 4,
    // backgroundColor: "blue",
    width: "100%",
  },
  subCont3: {
    flex: 1 / 4,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
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
    alignSelf:"flex-end"
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
  button:{
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
  error:{
    color:"red",
    textAlign:"center",
    fontStyle:"italic",
    display:"contents"

  },
  link:{
    color:"white",
   
    width:"100%",

  }
})