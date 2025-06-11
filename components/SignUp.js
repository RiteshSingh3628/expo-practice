import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  //navigation
  const navigation = useNavigation();

  const [userCred, setUserCred] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);

  const onPress = () => {
    if (
      userCred.userName === "" ||
      userCred.email === "" ||
      userCred.password === "" ||
      userCred.confirmPassword === "" ||
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
        <Text
          style={{
            color: "white",
            fontSize: 18,
            textDecorationLine: "underline",
            alignSelf: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          Sign Up
        </Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            onChangeText={(text) =>
              setUserCred({ ...userCred, userName: text })
            }
            style={styles.input}
            value={userCred.userName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            onChangeText={(text) => setUserCred({ ...userCred, email: text })}
            style={styles.input}
            value={userCred.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(text) =>
              setUserCred({ ...userCred, password: text })
            }
            style={styles.input}
            value={userCred.password}
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(text) =>
              setUserCred({ ...userCred, confirmPassword: text })
            }
            style={styles.input}
            value={userCred.confirmPassword}
          />

          {error ? (
            <Text style={styles.error}>
              All fields required and passwords must match
            </Text>
          ) : null}

          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.8}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
              SignUp
            </Text>
          </TouchableOpacity>

          {/* if already have an account */}
          <View style={styles.signInRow}>
            <Text style={styles.existingAccountText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.signInText}>SignIn</Text>
            </TouchableOpacity>
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
    width: "100%",
  },
  subCont1: {
    height: 120,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  subCont2: {
    flex: 1,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  subCont3: {
    height: 100,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  semiCircle: {
    width: "100%",
    height: 100,
    backgroundColor: "#461e68",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  semiCircle2: {
    width: "40%",
    height: 60,
    backgroundColor: "#461e68",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignSelf: "flex-end",
  },
  formGroup: {
    width: "100%",
    backgroundColor: "#2c2f33",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    color: "#af8fc9",
    marginBottom: 8,
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 16,
    color: "#fff",
    backgroundColor: "#3e4751",
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#461e68",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  error: {
    color: "#ff4d4f",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 4,
    marginBottom: 8,
    fontSize: 13,
  },
  signInRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
    gap: 4,
  },
  existingAccountText: {
    color: "#af8fc9",
    fontSize: 14,
    textAlign: "center",
  },
  signInText: {
    textDecorationLine: "underline",
    color: "#ff00bd",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
