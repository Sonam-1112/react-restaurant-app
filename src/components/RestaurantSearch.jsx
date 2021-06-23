import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

export default class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null
        }
    }

    search(key) {
        fetch('http://localhost:3000/restaurant?q=' + key).then((data) => {
            data.json().then((res) => {
                this.setState({ searchData: res })
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Search</h1>
                 <input type="text" onChange={(e)=>this.search(e.target.value)} placeholder="Search here..."/>
                {/*
                    this.state.searchData?
                    <div className="">
                        {
                            this.state.searchData.map((item)=>
                            <div className="">{item.name}</div>
                            )
                        }
                    </div>:""
                } */}
                {
                    this.state.searchData?
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Rating</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.searchData.map((item, i) =>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.address}</td>       
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    </div> :""}
            </div>
        )
    }
}