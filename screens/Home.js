import React,{useLayoutEffect,useState,useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { TouchableOpacity } from 'react-native'
import CustomListItem from '../component/CustomListItem'
import {auth,db} from "../firebase"
import {AntDesign,SimpleLineIcons} from "@expo/vector-icons"

const Home = ({navigation}) => {
    const [chats, setChats] = useState([])
    const signOut=()=>{
        auth.signOut().then(()=>{
            navigation.navigate("Login")
        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
             title:"ChatApp",
             headerTitleAlign:"ChatApp",
             headerStyle:{backgroundColor:"#fff"},
             headerTitleStyle:{color:"black"},
             headerTintColor:"black",
             headerLeft:()=>(
             <View style={{marginLeft:20}}>
                 <TouchableOpacity onPress={signOut} activeOpacity={0.5} >
                 <Avatar rounded source={{uri:auth?.currentUser?.photoURL}}/>
                 </TouchableOpacity>
             </View>
             ),
             headerRight:()=>(
                <View style={{flexDirection:"row",justifyContent:"space-between",width:80,marginRight:20,}}>
                    <TouchableOpacity activeOpacity={0.3}>
                        <AntDesign name="camerao" size={24} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.3} onPress={()=>{navigation.navigate("AddChat")}} >
                        <SimpleLineIcons name="pencil" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
             ),
        })
    }, [navigation])

    useEffect(() => {
        const unsubscribe =db.collection('chats').onSnapshot(snapshot=>(
            setChats(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        ))
        return () => {
            unsubscribe
        }
    }, [navigation])

    const enterChat=(id,chatName)=>{
        navigation.navigate("Chat",{
            id,
            chatName
        })
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({id,data:{chatName}})=>(
                    <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        height:"100%"
    }
})
