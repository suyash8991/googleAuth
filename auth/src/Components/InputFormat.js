import React from 'react';
import {View ,Text,TextInput,Button ,StyleSheet} from 'react-native';

const InputFormat=({secureTextEntry,Label,placeholder,onTextChange})=>{


        return(
     
     <View style={styles.viewStyle}>    
        <Text style={styles.textStyle}>{Label}</Text>
        <TextInput secureTextEntry={secureTextEntry} style={styles.emailStyle}  onChangeText={onTextChange} placeholder={placeholder} />
        
        </View>
    )

}


const styles=StyleSheet.create({
    textStyle:{
        fontSize:15,
        color:'blue',
        flex:1,
      
        width:100
    },
    emailStyle:{
       
        fontSize:14,
        color:'black',
        flex:2,
       
    },
    viewStyle:{
        
        alignItems:'center',
        flex:1,
        flexDirection:'row',
        borderWidth:3,
    
    }
})
export default InputFormat;