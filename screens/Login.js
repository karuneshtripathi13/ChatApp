import React from 'react'
import {useState,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button,Input,Image}from "react-native-elements"
import {StatusBar} from "expo-status-bar"
import { KeyboardAvoidingView } from 'react-native'
import { greaterThan } from 'react-native-reanimated'
import {auth} from "../firebase"
const Login = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn=()=>{
        auth.signInWithEmailAndPassword(email,password).catch((error)=>alert(error))
    }
    useEffect(() => {
        const unsubscribe= auth.onAuthStateChanged((authUser)=>{
            console.log(authUser)
            if(authUser){
                navigation.replace("Home");
            }
        })
        return unsubscribe;
    }, [])
    return (
        <KeyboardAvoidingView style={styles.container} >
            <StatusBar style="light"/>
            <Image source={require("../assets/icon1.png")}
            style={{
                width:200,height:200
            }} />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="Email" value={email} onChangeText={(text)=>setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type="Password" value={password} onChangeText={(text)=>setPassword(text)}
                onSubmitEditing={signIn}/>
            </View>
            <Button containerStyle={styles.button1} title="Login" type="clear" onPress={signIn}/>
            <Button onPress={()=>{navigation.navigate("Register")}} containerStyle={styles.button} type="outline" title="Register"/>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}
export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:1,
        backgroundColor:"white",
    },
    inputContainer: {
        width:300,
        marginTop:10,
    },
    button1: {
        width:200,
        marginTop:10,
        backgroundColor:"#C6FFAB",
    },
    button: {
        width:200,
        marginTop:10,
    },
})
