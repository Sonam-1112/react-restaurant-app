import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        }
    }

    login(){
        fetch('http://localhost:3000/login?q='+this.state.name).then((data)=>{
                data.json().then((res)=>{
                    if(res.length>0){
                        localStorage.setItem("login",JSON.stringify(res))
                        this.props.history.push('list')
                    }
                    else{
                        alert("Please check username & password again...!!!")
                    }
                })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Login</h1>
                <input type="text" name="user" onChange={(e)=>{this.setState({name:e.target.value})}} placeholder="Username"/> <br/> <br/>
                <input type="password" name="password" onChange={(e)=>{this.setState({passwors:e.target.value})}} placeholder="Password"/> <br/> <br/>
                <button onClick={()=>{this.login()}}>Login</button>
            </div>
        )
    }
}
