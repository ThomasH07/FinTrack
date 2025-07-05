import React, {useState} from 'react';
import { TextInput, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {signIn, signUp, confirmUser} from '../Cognitoservices';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootDrawerParamList } from '../components/types';

type Props = NativeStackScreenProps<RootDrawerParamList, 'Access'>;

function Accessscreen({ navigation }: Props) {
    const [user,setUser] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const [loginButton,setLoginButton] = useState(false)
    const [signupButton,setSignupButton] = useState(false)
    
    const [signupSuccessful,setSignupSuccessful] = useState(false)
    const [verification,setVerification] = useState("")

    const handleLoginButton = () => {
        if(loginButton === true){
            setLoginButton(false)
            
        }else{
            setLoginButton(true)
        }
    };

    const handleSignupButton = () => {
        if(signupButton === true){
            setSignupButton(false)
        }
        else{
            setSignupButton(true)
        }
    };
    const handleSignupSuccessful = () => {
        if(signupSuccessful === true){
            setSignupSuccessful(false)
        }else{
            setSignupSuccessful(true)
        }
    }
    const handleAccessButton = () =>{
        if(signupButton === true){
            setSignupButton(false)
        }else{
            setLoginButton(false)
        }
        setSignupSuccessful(false)
        setEmail('')
        setPass('')
        setUser('')
        setVerification('')
    };
    {/** Logging in a account */}
    const handleLogin = async () => {
        try {
            const session = await signIn(user, pass);
            
            console.log("Login successful:", session);
        

            await AsyncStorage.setItem("token", session.getAccessToken().getJwtToken());
            navigation.replace('FinTrack');

        } catch (error) {
          console.error("Login failed:", error);
        }
      };
    {/** creating a account */}
    const handleSignup = async () => {
        try {
            const session = await signUp(user, email, pass); 
            console.log("Signup successful:", session);
            handleSignupSuccessful();
        } catch (error) {
            console.error("Signup failed:", error);

        }
      };
    const handleVerification = async () =>{
        try {
            const session = await confirmUser(user,verification); 
            console.log("Verification successful:", session);
            handleAccessButton();
        } catch (error) {
            console.error("Verification failed:", error);

        }
    };
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* Header */}
                    <Image 
                    source={require('../assets/TempLogo.jpg')}
                    style={styles.logo}
                    />
                <Text style = {styles.titleText}>FinTrack</Text>
                {/** signup/login button */}
                {!signupButton && !loginButton && (
                    <>
                    <TouchableOpacity onPress={handleLoginButton} style = {styles.accessButton}>
                        <Text style = {styles.accessButtonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSignupButton} style = {styles.accessButton}>
                        <Text style = {styles.accessButtonText}>Signup</Text>
                    </TouchableOpacity>
                    
                    </>
                )}
                {/** login display */}
                {!signupButton && loginButton && (
                <>
                    <Text style={styles.baseText}>Enter your User:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Your User"
                        value={user}
                        onChangeText={setUser}
                    />

                    <Text style={styles.baseText}>Enter your Password:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Your password"
                        value={pass}
                        onChangeText={setPass}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={handleLogin} style={styles.accessButton}>
                        <Text style={styles.accessButtonText}>Submit</Text>
                    </TouchableOpacity>
                </>
                )}

                {/* signup */}
                {!signupSuccessful && !loginButton && signupButton && (
                <>
                    <Text style={styles.baseText}>Enter your User:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Your User"
                        value={user}
                        onChangeText={setUser}
                    />
                    <Text style={styles.baseText}>Enter your Email:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Your Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={styles.baseText}>Enter your Password:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Your Password"
                        value={pass}
                        onChangeText={setPass}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={handleSignup} style={styles.accessButton}>
                        <Text style={styles.accessButtonText}>Submit</Text>
                    </TouchableOpacity>
                </>
                )}
                {/** Verification */}
                {signupSuccessful &&(
                    <>
                    <Text style={styles.baseText}>Enter your confirmation code:</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Your code"
                        value={verification}
                        onChangeText={setVerification}
                    />
                    <TouchableOpacity onPress={handleVerification} style={styles.accessButton}>
                        <Text style={styles.accessButtonText}>Submit</Text>
                    </TouchableOpacity>
                    </>
                )}

                {/** back button */}
                {(signupButton || loginButton || signupSuccessful) && (

                <>
                <TouchableOpacity onPress={handleAccessButton} style = {styles.accessButton}>
                    <Text style = {styles.accessButtonText}>Back</Text>
                </TouchableOpacity>
                
                </>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    logo: {
        width:120,
        height:120,
        marginBottom: 10,
    },
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
        width: '50%',   
        height: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 20,
    },
    accessButton: {
        
        width: '25%',   
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        borderRadius: 12,
        margin:10,
        padding:10

    },
    accessButtonText: {
        color: 'white',
        fontSize: 8,
    }
  });
export default Accessscreen;