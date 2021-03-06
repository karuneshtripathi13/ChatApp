import React from 'react'
import {useState ,useLayoutEffect} from 'react'
import { StatusBar } from 'react-native'
import { KeyboardAvoidingView} from 'react-native'
import { Button,Input,Text} from "react-native-elements"
import { StyleSheet,  View } from 'react-native'
import {auth} from "../firebase"

const Register = ({navigation}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const register=()=>{
        auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
            authUser.user.updateProfile({
                displayName:name,
                photoURL:imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            })
        })
        .catch((error)=>alert(error.message))
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:"Back to Login",
        })
    }, [navigation])

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light"/>
            <Text h4 style={{marginBottom:50}}>
                Create ChatApp Account
            </Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" autoFocus type="text" value={name} onChangeText={(text)=>{setName(text)}}/>
                <Input placeholder="Email" type="email" value={email} onChangeText={(text)=>{setEmail(text)}}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text)=>{setPassword(text)}}/>
                <Input placeholder="Profile Picture URL (optional)" type="text" value={imageUrl} onChangeText={(text)=>{setImageUrl(text)}} onSubmitEditing={register}/>
            </View>
            <Button containerStyle={styles.button} type="clear" raised title="Register" onPress={register}/>
            <View style={{height:100}}/>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:1,
        backgroundColor:"white",
    },
    inputContainer:{
        width:300,
        marginTop:10,
    },
    button: {
        width:200,
        marginTop:10,
        backgroundColor:"#C6FFAB",
    },

})
