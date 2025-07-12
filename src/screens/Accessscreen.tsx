import React, {useState} from 'react';
import { TextInput, Image, Text, TouchableOpacity } from 'react-native';
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
            <SafeAreaView className="flex-1 items-center justify-center">
                {/* Header */}
                    <Image 
                    source={require('../assets/TempLogo.jpg')}
                    className="w-[120px] h-[120px] mb-[10px]"
                    />
                <Text className = "text-xl font-medium">FinTrack</Text>
                {/** signup/login button */}
                {!signupButton && !loginButton && (
                    <>
                    <TouchableOpacity onPress={handleLoginButton} className="w-1/5 h-[39px] border border-black bg-black rounded-[12px] m-[10px] p-[10px] items-center justify-center">
                        <Text className = "text-white text-sm">Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleSignupButton} className ="w-1/5 h-[39px] border border-black bg-black rounded-[12px] m-[5px] p-[5px] items-center justify-center">
                        <Text className = "text-white text-sm">Signup</Text>
                    </TouchableOpacity>
                    
                    </>
                )}
                {/** login display */}
                {!signupButton && loginButton && (
                <>
                    <Text style={{ fontFamily: 'Cochin' }}>Enter your User:</Text>
                        <TextInput 
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[20px]" 

                        placeholder="Your User"
                        value={user}
                        onChangeText={setUser}
                    />

                    <Text style={{ fontFamily: 'Cochin' }}>Enter your Password:</Text>
                        <TextInput
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[20px]" 

                        placeholder="Your password"
                        value={pass}
                        onChangeText={setPass}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={handleLogin} className ="w-1/5 h-[39px] border border-black bg-black rounded-[12px] m-[5px] p-[5px] items-center justify-center">
                        <Text className = "text-white text-sm">Submit</Text>
                    </TouchableOpacity>
                </>
                )}

                {/* signup */}
                {!signupSuccessful && !loginButton && signupButton && (
                <>
                    <Text style={{ fontFamily: 'Cochin' }}>Enter your User:</Text>
                        <TextInput
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[20px]" 

                        placeholder="Your User"
                        value={user}
                        onChangeText={setUser}
                    />
                    <Text style={{ fontFamily: 'Cochin' }}>Enter your Email:</Text>
                        <TextInput
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[20px]" 

                        placeholder="Your Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={{ fontFamily: 'Cochin' }}>Enter your Password:</Text>
                        <TextInput
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[20px]" 

                        placeholder="Your Password"
                        value={pass}
                        onChangeText={setPass}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={handleSignup} className ="w-1/5 h-[39px] border border-black bg-black rounded-[12px] m-[5px] p-[5px] items-center justify-center">
                        <Text className = "text-white text-sm">Submit</Text>
                    </TouchableOpacity>
                </>
                )}
                {/** Verification */}
                {signupSuccessful &&(
                    <>
                    <Text style={{ fontFamily: 'Cochin' }}>Enter your confirmation code:</Text>
                        <TextInput
                        className="w-1/2 h-[30px] border border-[#ccc] rounded-[8px] px-[15px] text-[16px] mb-[20px]" 

                        placeholder="Your code"
                        value={verification}
                        onChangeText={setVerification}
                    />
                    <TouchableOpacity onPress={handleVerification} className ="w-1/5 h-[39px] border border-black bg-black rounded-[12px] m-[5px] p-[5px] items-center justify-center">
                        <Text className = "text-white text-sm">Submit</Text>
                    </TouchableOpacity>
                    </>
                )}

                {/** back button */}
                {(signupButton || loginButton || signupSuccessful) && (

                <>
                <TouchableOpacity onPress={handleAccessButton} className ="w-1/5 h-[39px] border border-black bg-black rounded-[12px] m-[5px] p-[5px] items-center justify-center">
                    <Text className = "text-white text-sm">Back</Text>
                </TouchableOpacity>
                
                </>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default Accessscreen;