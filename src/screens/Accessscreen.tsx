import React, {useState} from 'react';
import { TextInput, Image, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {signIn, signUp, confirmUser} from '../Cognitoservices';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootDrawerParamList } from '../components/types';
import "../components/test.css"
type Props = NativeStackScreenProps<RootDrawerParamList, 'Access'>;

function Accessscreen({ navigation }: Props) {
    const [user,setUser] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const [loginButton,setLoginButton] = useState(true)
    const [signupButton,setSignupButton] = useState(false)
    
    const [signupSuccessful,setSignupSuccessful] = useState(false)
    const [verification,setVerification] = useState("")

    // const handleLoginButton = () => {
    //     if(loginButton === true){
    //         setLoginButton(false)
            
    //     }else{
    //         setLoginButton(true)
    //         setSignupButton(false)
    //         setSignupSuccessful(false)
    //     }
    // };

    const handleSignupButton = () => {
        if(signupButton === true){
            setSignupButton(false)
        }
        else{
            setSignupButton(true)
            setLoginButton(false)
            setSignupSuccessful(false)
        }
    };

    const handleSignupSuccessful = () => {
        if(signupSuccessful === true){
            setSignupSuccessful(false)
            
        }else{
            setSignupSuccessful(true)
            setLoginButton(false)
            setSignupButton(false)
        }
    }
    // login!
    const handleAccessButton = () =>{
        setSignupButton(false)
        setLoginButton(true)
    
        setSignupSuccessful(false)
        setEmail('')
        setPass('')
        setUser('')
        setVerification('')
    };
    {/** Logging in a account */}
    const handleLogin = async () => {
        try {
            // const session = await signIn(user, pass);
            
            // console.log("Login successful:", session);
    
            // await AsyncStorage.setItem("token", session.getAccessToken().getJwtToken());
            navigation.replace('FinTrack');

        } catch (error) {
          console.error("Login failed:", error);
        }
      };
    {/** creating a account */}
    const handleSignup = async () => {
        try {
            // const session = await signUp(user, email, pass); 
            console.log("Signup successful:");
            handleSignupSuccessful();
        } catch (error) {
            console.error("Signup failed:", error);

        }
      };
    const handleVerification = async () =>{
        try {
            // const session = await confirmUser(user,verification); 
            console.log("Verification successful:");
            // console.log("Verification successful:", session);
            handleAccessButton();
        } catch (error) {
            console.error("Verification failed:", error);

        }
    };
    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex-1 items-center justify-center">
                <View className = "bg-white w-5/6 h-4/6 justify-center items-center rounded-2xl shadow-xl shadow-gray-500">

                
                    {/* Header */}
                    <KeyboardAvoidingView className="flex-1 w-full items-center mt-[40px]">
                        <Image 
                        source={require('../assets/TempLogo.jpg')}
                        className="w-[100px] h-[100px] mb-[10px]"
                        />
                        <Text className = "text-xl font-medium">FinTrack(PROTOTYPE)</Text>
                    

                {/** login display */}
                {!signupButton && loginButton && (
                <>
                    <Text style={{ fontFamily: 'Cochin' }}>Enter your User:</Text>
                        <TextInput 
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[15px]" 

                        placeholder="Your User"
                        value={user}
                        onChangeText={setUser}
                    />

                    <Text style={{ fontFamily: 'Cochin' }}>Enter your Password:</Text>
                        <TextInput
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[15px]" 

                        placeholder="Your password"
                        value={pass}
                        onChangeText={setPass}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={handleLogin} className ="w-1/5 h-[39px] border border-black bg-black rounded-[12px] m-[5px] p-[10px] items-center justify-center">
                        <Text className = "text-white text-sm">Submit</Text>
                    </TouchableOpacity>
                    
    
                </>
                )}

                {/* signup */}
                {signupButton && !loginButton &&(
                <>
                    <Text style={{ fontFamily: 'Cochin' }}>Enter your User:</Text>
                        <TextInput
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[15px]" 

                        placeholder="Your User"
                        value={user}
                        onChangeText={setUser}
                    />
                    <Text style={{ fontFamily: 'Cochin' }}>Enter your Email:</Text>
                        <TextInput
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[15px]" 

                        placeholder="Your Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={{ fontFamily: 'Cochin' }}>Enter your Password:</Text>
                        <TextInput
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[15px]" 

                        placeholder="Your Password"
                        value={pass}
                        onChangeText={setPass}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={handleSignup} className ="w-1/5 h-[39px] border border-black bg-black rounded-[12px] m-[1px] p-1px] items-center justify-center">
                        <Text className = "text-white text-sm">Submit</Text>
                    </TouchableOpacity>
                </>
                )}
                {/** Verification */}
                {signupSuccessful &&  (
                    <>
                    <Text style={{ fontFamily: 'Cochin' }}>Enter your confirmation code:</Text>
                        <TextInput
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[10px]" 

                        placeholder="Your code"
                        value={verification}
                        onChangeText={setVerification}
                    />
                    <TouchableOpacity onPress={handleVerification} className ="w-1/5 h-[39px] border border-black bg-black rounded-[12px] m-[1px] p-[5px] items-center justify-center">
                        <Text className = "text-white text-sm">Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text className = "mt-1mb-4"> Didn't receive code?</Text>
                    </TouchableOpacity>
                    
                    </>
                )}

                {/** Extra buttons */}
                {!signupButton &&  (
                <>
                <TouchableOpacity onPress={handleSignupButton} className ="w-5/5 h-[39px] rounded-[12px] m-[1px] p-[1px] items-center justify-center">
                    <Text className = "text-black text-sm">Dont have an account?</Text>
                    <Text className = "text-blue-500 text-sm"> Sign up</Text>
                </TouchableOpacity>
                </>
                )}
                {signupButton && (
                <>
                <TouchableOpacity onPress={handleAccessButton} className ="w-5/5 h-[39px] m-[1px] p-[1px] items-center justify-center">
                    <Text className = "text-black text-sm">Back</Text>
                </TouchableOpacity>
                </>
                )}
                </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
export default Accessscreen;