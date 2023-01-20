import React from "react";
import { useState, useEffect } from "react";
import './Login.css'
import {db} from './firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";
import image from '../../assets/people.png'

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
        <div className="allContents">
            <div className="header">
                <img src={image} alt="camera image" width={80} height={80}/>
                <div className="imagem">
                    <h1>MySpace</h1>
                    <p>A space to share with your friends.</p>
                </div>
            </div>
            <div className="formContainer">                
                <div className="title">
                    <p className="create">Create and enjoy your space.</p>
                </div>
                <div className="form">
                    <div className="inputs">
                        <input required type="text" placeholder="Name"
                        onChange={(event) => {setNewName(event.target.value)}}/>
                        <input required type="number" placeholder="ID"
                        onChange={(event) => {setNewRoom(event.target.value)}}/>
                    </div>
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
                </div>
            </div>
        </div>
    )
}
