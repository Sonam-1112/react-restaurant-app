import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

export default class RestaurantList extends Component {

    constructor() {
        super();
        this.state = {
            list: null,
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData(){
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                console.warn(result);
                this.setState({ list: result })
            })
        })
    }

    delete(id){
        fetch('http://localhost:3000/restaurant/'+id,{
            method:"DELETE",
        }).then((result)=>{
            result.json().then((response)=>{
                alert("Restaurant has been deleted")
                this.getData()
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td><Link to={`/update/${item.id}`}><FontAwesomeIcon icon={faEdit}/></Link> 
                                                <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color='red'/></span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div> : "Please Wait..."}
            </div>
        )
    }
}

