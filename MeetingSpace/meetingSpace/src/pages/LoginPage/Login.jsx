import React from "react";
import { useState, useEffect } from "react";
import './Login.css'
import {db} from './firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";

export default function Login() {

    const [newName, setNewName] = useState("")
    const [newRoom, setNewRoom] = useState(0)

    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "users")

    const createRoom = async () => {
        await addDoc(usersCollectionRef, {name: newName, IdRoom: newRoom})
    }

    useEffect(() => {

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            /*I just want the data from id field*/
            /*The function data returns the name and id from people*/
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

        }

        getUsers()
    }, [])

    return (
        <div className="form">
            <input required type="text" placeholder="Name" 
            onChange={(event) => {setNewName(event.target.value)}}/>
            <input required type="number" placeholder="ID" 
            onChange={(event) => {setNewRoom(event.target.value)}}/>
            <Link to={'/Room'}><button onClick={createRoom}> Create Room </button></Link>
            <div> 
                {/*{users.map((user) => {                                       
                    return  (                       
                    <div> 
                        <h1> Name: {user.name} </h1> 
                        <h2> ID: {user.IdRoom} </h2>
                    </div>)
                })} */}
            </div>
            <div className="title">Enjoy a meeting</div>   
            <div className="datas">
                <form action="">
                    <input type="text" name='yourName' placeholder="Your Name"/>
                    <input type="text" name="id" placeholder="ID" />
                </form>
            </div>         
        </div>
    )
}
