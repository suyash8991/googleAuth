import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import InputFormat from './InputFormat';
import Spinner from './Spinner';
export default class LoginForm extends React.Component {

    state = {
        email: '',
        password: '',
        error:'',
        isLoading:false,
    }
    onButtonPress(){
        this.setState({
            error:"",
            isLoading:true,
        })
        const {email,password}=this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.onSuccess.bind(this)
        })
        .catch(()=>{
            
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this))
        })
    }
    onSuccess(){
        this.setState({
            isLoading:false,
            email:'',
            password:'',
            error:''
        })
    }
    onFail(){
        this.setState({
            isLoading:false,
            
            error:'Authentication Failed'
        })
    }
    showSpinner(){
        if(this.state.isLoading){
            return(
                <Spinner/>
            )
        }
        return(
            <Text> </Text>
        )
    }
    render() {
        return (
            <View style={styles.main} >
                <InputFormat value={this.state.email} Label="Email" onTextChange={email => this.setState({ email })} placeholder=" eg abc@gmail.com" />
           
                <InputFormat secureTextEntry={true} value={this.state.password} Label="Password" onTextChange={password => this.setState({ password })} placeholder=" enter password" />
             
               <Text>
                   {this.state.error}
               </Text>
         {this.showSpinner()}
                <Button title="login" onPress={this.onButtonPress.bind(this)} />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    main:{
        flex:1
    },
    s:{
       
    }
})