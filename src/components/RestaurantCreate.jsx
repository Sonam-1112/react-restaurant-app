import React, { Component } from 'react'

export default class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state = {
            name:null,
            email:null,
            rating:null,
            rating:null
        }
    }
    create = ()=>{
        fetch('http://localhost:3000/restaurant',{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((response)=>{
                alert("Restaurant has been added")
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Create</h1>
                <div className="">
                    <input type="text" onChange={(e)=>{this.setState({name:e.target.value})}} placeholder="Restaurant Name"/> <br/> <br/>
                    <input type="text" onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Restaurant Email"/> <br/> <br/>
                    <input type="text" onChange={(e)=>{this.setState({rating:e.target.value})}} placeholder="Restaurant Rating"/> <br/> <br/>
                    <input type="text" onChange={(e)=>{this.setState({address:e.target.value})}} placeholder="Restaurant Address"/> <br/> <br/>
                    <button onClick={()=>{this.create()}}>Add Restaurant</button>                
                </div>
            </div>
        )
    }
}