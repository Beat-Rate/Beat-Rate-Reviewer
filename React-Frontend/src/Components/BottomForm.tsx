import React, { Component } from 'react'
import firebase from "firebase";
export default class BottomForm extends Component {
    state = {
        cell : "",
        pass : "",
        email : ""
    };


    loginOrCreateAccount(){
        var cell = this.state.cell;
        var pass = this.state.pass;
        var email = this.state.email;

        if(window.location.href.indexOf("/signin") > -1){
            this.login(cell, pass);
        }else{
            this.register(cell, pass, email);
        }
    }

    setAuthInformationAndReload(res:any){
        var user = res.user;
        localStorage.setItem('logged', "true");
        localStorage.setItem('user', JSON.stringify(user));
        window.location.replace('/');
    }
    
    login(cell:string , pass:string){
        console.log(firebase.auth())
        firebase.auth().signInWithEmailAndPassword(`${cell}@ocaccounts.co.za`, pass).then(res=>{
            this.setAuthInformationAndReload(res)

        })
    }

    register(cell:string, pass:string, email:string){
        if(pass.length > 6 && cell.length == 10 && cell.split("")[0] == "0" ){
            try{
            firebase.auth().createUserWithEmailAndPassword(`${cell}@ocaccounts.co.za`, pass).then(res => {
                this.setAuthInformationAndReload(res)
            });
        }catch(e){
           
            console.log(e)
        }
        }else{
            //show error
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
